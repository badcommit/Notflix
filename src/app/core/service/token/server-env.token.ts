import { InjectionToken } from "@angular/core"

export interface SERVER_ENV {
    server: string
  }
  
  export const ENV = new InjectionToken<SERVER_ENV>("env", {
    providedIn: "root",
    factory: ()=> {
      return {
        server: "http://localhost:4231/"
      }
    }
  })