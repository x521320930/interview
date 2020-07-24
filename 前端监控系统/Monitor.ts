class Monitor {
    navigator: Navigator
    appKey: String // 钥匙
    appUrl: String // 链接地址
  protected  baseInfo: BaseInfo
  protected  resourceError:ResourceError
  protected  requestError: RequestError
  protected  jsError: JSError
  constructor (appUrl: string, appKey: string) {
    this.navigator = window.navigator
    this.appKey = appUrl // 钥匙
    this.appUrl = appKey // 链接地址
    this.baseInfo = new BaseInfo()
    this.resourceError = new ResourceError()
    this.requestError = new RequestError()
    this.jsError = new JSError()
  }
}

class BaseInfo extends Monitor {
  appId: String
  platform: 'PC' | 'Mobile'
  phoneType: String
  constructor () {
    this.platform
  }
}

class ResourceError extends Monitor {
  constructor () {
    
  }
}

class RequestError extends Monitor {
  constructor () {
    super()
  }
}

class JSError extends Monitor {
  constructor () {
    
  }
}