import { useDomStore } from '~/stores/dom'

export interface IApiHandler {
  handleApi: Function;
  handleAsyncApi: Function;
}

class ApiHandler {
  private static instance: IApiHandler

  public handleApi(apiFn: Function) {
    const response = apiFn()
    // watch values for UI
    this.watchPending(response.isPending)
    this.watchError(response.isError)
    return response
  }

  private watchPending(isPending: Ref) {
    // watch and toggle loading indicator
    const domStore = useDomStore()
    const { setIsLoading } = domStore
    setIsLoading(isPending.value)
    watch(isPending, (newVal: boolean) => {
      setIsLoading(newVal)
    })
  }

  private watchError(isError: Ref) {
    // watch and toggle error notification
    const domStore = useDomStore()
    const { setIsError } = domStore
    setIsError(isError.value)
    watch(isError, (newVal: boolean) => {
      setIsError(newVal)
    })
  }

  public async handleAsyncApi(apiFn: Function) {
    // show loading
    const domStore = useDomStore()
    const { setIsLoading, setIsError } = domStore
    setIsLoading(true)
    // execute api
    const response = await apiFn()
    // hide loading after the api call is done
    setIsLoading(false)
    setIsError(response.isError, response.error?.data?.error)
    return response
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ApiHandler()
    }
    return this.instance
  }
}

export default ApiHandler.getInstance()
