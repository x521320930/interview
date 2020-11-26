
function Ealge (option) {
    this.url = option.url
    this.appId = option.appId
    this.debug = option.debug || false

    this.init()
}

Ealge.version = '1.0.2'

Ealge.prototype.init = function () {
    this.terminal()
    this.jsError()
    this.resourceError()
    this.requestError()
}


Ealge.prototype.jsError = function () {
    window.onerror = function (msg, url, line, column, error) {
        
    }
}

Ealge.prototype.resourceError = function () {
    const _this = this
    window.addEventListener && window.addEventListener('error', function (e) {
        try {
        } catch (error) {
        }
    },true)
}

Ealge.prototype.requestError = function () {
    const open =  XMLHttpRequest.prototype.open
    const send = XMLHttpRequest.prototype.send
    XMLHttpRequest.prototype.open = function (method, url) {
        try {
            this.eagleOpenData = {
                method: method,
                url: url,
                startTime: + new Date()
            }
        } catch (error) {}
        open && open.apply(this, arguments)
    }

    XMLHttpRequest.prototype.send = function () {
        try {
            const loadend = this.onloadend;
            this.onloadend = function () {
                try {

                } catch (error) {}
                loadend && loadend.apply(this, arguments)
            }
        } catch (error) {}
        send && send.apply(this, arguments)
    }
}

Ealge.prototype.terminal = function () {
    ['log', 'error', 'warn'].forEach(function (n) {
        const print = console[n]
        console[n] = function () {
            try {
            } catch (error) {}
            print.apply(this, arguments)
        }
    })
}


Ealge.prototype.send = function (data) {
    const url = this.url;
    const params = encodeURIComponent(data);
    (new Image).src = `${url}/n.gif?params=${params}`
}
