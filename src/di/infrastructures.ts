import IInfrastructures from './interfaces/iInfrastructures'
import Http from '@adapters/infrastructures/Http'

export default (): IInfrastructures => {
  return {
    http: new Http(),
  }
}