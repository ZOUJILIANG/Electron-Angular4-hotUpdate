import {Http, HttpModule} from '@angular/http';
import {environment} from "./environments/environment";

import { IadministrativeareacodeserviceApi } from 'c-s-jcsj-query';
import { IclasscategoryserviceApi } from 'c-s-jcsj-query';
import { IcourseserviceApi } from 'c-s-jcsj-query';
import { IdifficultylevelserviceApi } from 'c-s-jcsj-query';
import { IedulevelserviceApi } from 'c-s-jcsj-query';
import { IgradetypeserviceApi } from 'c-s-jcsj-query';
import { InationcodeserviceApi } from 'c-s-jcsj-query';
import { IorgtypeserviceApi } from 'c-s-jcsj-query';
import { IroleinfoserviceApi } from 'c-s-jcsj-query';
import { IschoolperiodgradetypeserviceApi } from 'c-s-jcsj-query';
import { IschoolperiodserviceApi } from 'c-s-jcsj-query';
import { IschoolrunningtypeserviceApi } from 'c-s-jcsj-query';
import { IschooltypeserviceApi } from 'c-s-jcsj-query';
import { IsemesterserviceApi } from 'c-s-jcsj-query';
import { IsexcodeserviceApi } from 'c-s-jcsj-query';
import { IkmcourseserviceApi } from 'c-s-tutor-kp-mapApi';
import { IkmdifficultyserviceApi } from 'c-s-tutor-kp-mapApi';
import { IknowledgemapserviceApi } from 'c-s-tutor-kp-mapApi';
import { ItestworkshopquestionsearchserviceApi } from 'c-s-tutor-testworkshop-searchApi';
import { IfileserviceApi } from 'c-s-tutor-testworkshopApi';
import { IquestionimportcommandserviceApi } from 'c-s-tutor-testworkshopApi';
import { IquestiontemplateserviceApi } from 'c-s-tutor-testworkshopApi';
import { ItestcompletenessserviceApi } from 'c-s-tutor-testworkshopApi';
import { ItestworkshopquestionserviceApi } from 'c-s-tutor-testworkshopApi';
import { IprotectionquestionserviceApi } from 'c-s-yh';
import { IuseravatarserviceApi } from 'c-s-yh';
import { IuserprotectionserviceApi } from 'c-s-yh';
import { IuserserviceApi } from 'c-s-yh';
import { IaccountserviceApi } from 'c-s-zh-ptApi';
import { IsecretserviceApi } from 'c-s-zh-ptApi';

export function IadministrativeareacodeserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IadministrativeareacodeserviceApi(http, url, null);
}
export function IclasscategoryserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IclasscategoryserviceApi(http, url, null);
}
export function IcourseserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IcourseserviceApi(http, url, null);
}
export function IdifficultylevelserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IdifficultylevelserviceApi(http, url, null);
}
export function IedulevelserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IedulevelserviceApi(http, url, null);
}
export function IgradetypeserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IgradetypeserviceApi(http, url, null);
}
export function InationcodeserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new InationcodeserviceApi(http, url, null);
}
export function IorgtypeserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IorgtypeserviceApi(http, url, null);
}
export function IroleinfoserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IroleinfoserviceApi(http, url, null);
}
export function IschoolperiodgradetypeserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IschoolperiodgradetypeserviceApi(http, url, null);
}
export function IschoolperiodserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IschoolperiodserviceApi(http, url, null);
}
export function IschoolrunningtypeserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IschoolrunningtypeserviceApi(http, url, null);
}
export function IschooltypeserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IschooltypeserviceApi(http, url, null);
}
export function IsemesterserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IsemesterserviceApi(http, url, null);
}
export function IsexcodeserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["jcsj"] && environment["jcsj"].httpProtocol != null){
        httpProtocol = environment["jcsj"].httpProtocol;
    }

    let contextPath: string = "/jcsj";
    if(environment["jcsj"] && environment["jcsj"].contextPath != null){
        contextPath = environment["jcsj"].contextPath;
    }

    let domain = environment.domain;
    if(environment["jcsj"] && environment["jcsj"].domain != null){
        domain = environment["jcsj"].domain;
    }

    let url: string = httpProtocol + "://jcsj" + domain + contextPath;
    return new IsexcodeserviceApi(http, url, null);
}
export function IkmcourseserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["tutor-kp-map"] && environment["tutor-kp-map"].httpProtocol != null){
        httpProtocol = environment["tutor-kp-map"].httpProtocol;
    }

    let contextPath: string = "/tutor-kp-map";
    if(environment["tutor-kp-map"] && environment["tutor-kp-map"].contextPath != null){
        contextPath = environment["tutor-kp-map"].contextPath;
    }

    let domain = environment.domain;
    if(environment["tutor-kp-map"] && environment["tutor-kp-map"].domain != null){
        domain = environment["tutor-kp-map"].domain;
    }

    let url: string = httpProtocol + "://tutor-kp-map" + domain + contextPath;
    return new IkmcourseserviceApi(http, url, null);
}
export function IkmdifficultyserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["tutor-kp-map"] && environment["tutor-kp-map"].httpProtocol != null){
        httpProtocol = environment["tutor-kp-map"].httpProtocol;
    }

    let contextPath: string = "/tutor-kp-map";
    if(environment["tutor-kp-map"] && environment["tutor-kp-map"].contextPath != null){
        contextPath = environment["tutor-kp-map"].contextPath;
    }

    let domain = environment.domain;
    if(environment["tutor-kp-map"] && environment["tutor-kp-map"].domain != null){
        domain = environment["tutor-kp-map"].domain;
    }

    let url: string = httpProtocol + "://tutor-kp-map" + domain + contextPath;
    return new IkmdifficultyserviceApi(http, url, null);
}
export function IknowledgemapserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["tutor-kp-map"] && environment["tutor-kp-map"].httpProtocol != null){
        httpProtocol = environment["tutor-kp-map"].httpProtocol;
    }

    let contextPath: string = "/tutor-kp-map";
    if(environment["tutor-kp-map"] && environment["tutor-kp-map"].contextPath != null){
        contextPath = environment["tutor-kp-map"].contextPath;
    }

    let domain = environment.domain;
    if(environment["tutor-kp-map"] && environment["tutor-kp-map"].domain != null){
        domain = environment["tutor-kp-map"].domain;
    }

    let url: string = httpProtocol + "://tutor-kp-map" + domain + contextPath;
    return new IknowledgemapserviceApi(http, url, null);
}
export function ItestworkshopquestionsearchserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["tutor-testworkshop-search"] && environment["tutor-testworkshop-search"].httpProtocol != null){
        httpProtocol = environment["tutor-testworkshop-search"].httpProtocol;
    }

    let contextPath: string = "/tutor-testworkshop-search";
    if(environment["tutor-testworkshop-search"] && environment["tutor-testworkshop-search"].contextPath != null){
        contextPath = environment["tutor-testworkshop-search"].contextPath;
    }

    let domain = environment.domain;
    if(environment["tutor-testworkshop-search"] && environment["tutor-testworkshop-search"].domain != null){
        domain = environment["tutor-testworkshop-search"].domain;
    }

    let url: string = httpProtocol + "://tutor-testworkshop-search" + domain + contextPath;
    return new ItestworkshopquestionsearchserviceApi(http, url, null);
}
export function IfileserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].httpProtocol != null){
        httpProtocol = environment["tutor-testworkshop"].httpProtocol;
    }

    let contextPath: string = "/tutor-testworkshop";
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].contextPath != null){
        contextPath = environment["tutor-testworkshop"].contextPath;
    }

    let domain = environment.domain;
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].domain != null){
        domain = environment["tutor-testworkshop"].domain;
    }

    let url: string = httpProtocol + "://tutor-testworkshop" + domain + contextPath;
    return new IfileserviceApi(http, url, null);
}
export function IquestionimportcommandserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].httpProtocol != null){
        httpProtocol = environment["tutor-testworkshop"].httpProtocol;
    }

    let contextPath: string = "/tutor-testworkshop";
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].contextPath != null){
        contextPath = environment["tutor-testworkshop"].contextPath;
    }

    let domain = environment.domain;
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].domain != null){
        domain = environment["tutor-testworkshop"].domain;
    }

    let url: string = httpProtocol + "://tutor-testworkshop" + domain + contextPath;
    return new IquestionimportcommandserviceApi(http, url, null);
}
export function IquestiontemplateserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].httpProtocol != null){
        httpProtocol = environment["tutor-testworkshop"].httpProtocol;
    }

    let contextPath: string = "/tutor-testworkshop";
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].contextPath != null){
        contextPath = environment["tutor-testworkshop"].contextPath;
    }

    let domain = environment.domain;
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].domain != null){
        domain = environment["tutor-testworkshop"].domain;
    }

    let url: string = httpProtocol + "://tutor-testworkshop" + domain + contextPath;
    return new IquestiontemplateserviceApi(http, url, null);
}
export function ItestcompletenessserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].httpProtocol != null){
        httpProtocol = environment["tutor-testworkshop"].httpProtocol;
    }

    let contextPath: string = "/tutor-testworkshop";
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].contextPath != null){
        contextPath = environment["tutor-testworkshop"].contextPath;
    }

    let domain = environment.domain;
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].domain != null){
        domain = environment["tutor-testworkshop"].domain;
    }

    let url: string = httpProtocol + "://tutor-testworkshop" + domain + contextPath;
    return new ItestcompletenessserviceApi(http, url, null);
}
export function ItestworkshopquestionserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].httpProtocol != null){
        httpProtocol = environment["tutor-testworkshop"].httpProtocol;
    }

    let contextPath: string = "/tutor-testworkshop";
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].contextPath != null){
        contextPath = environment["tutor-testworkshop"].contextPath;
    }

    let domain = environment.domain;
    if(environment["tutor-testworkshop"] && environment["tutor-testworkshop"].domain != null){
        domain = environment["tutor-testworkshop"].domain;
    }

    let url: string = httpProtocol + "://tutor-testworkshop" + domain + contextPath;
    return new ItestworkshopquestionserviceApi(http, url, null);
}
export function IprotectionquestionserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["yh-pt"] && environment["yh-pt"].httpProtocol != null){
        httpProtocol = environment["yh-pt"].httpProtocol;
    }

    let contextPath: string = "/yh-pt";
    if(environment["yh-pt"] && environment["yh-pt"].contextPath != null){
        contextPath = environment["yh-pt"].contextPath;
    }

    let domain = environment.domain;
    if(environment["yh-pt"] && environment["yh-pt"].domain != null){
        domain = environment["yh-pt"].domain;
    }

    let url: string = httpProtocol + "://yh-pt" + domain + contextPath;
    return new IprotectionquestionserviceApi(http, url, null);
}
export function IuseravatarserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["yh-pt"] && environment["yh-pt"].httpProtocol != null){
        httpProtocol = environment["yh-pt"].httpProtocol;
    }

    let contextPath: string = "/yh-pt";
    if(environment["yh-pt"] && environment["yh-pt"].contextPath != null){
        contextPath = environment["yh-pt"].contextPath;
    }

    let domain = environment.domain;
    if(environment["yh-pt"] && environment["yh-pt"].domain != null){
        domain = environment["yh-pt"].domain;
    }

    let url: string = httpProtocol + "://yh-pt" + domain + contextPath;
    return new IuseravatarserviceApi(http, url, null);
}
export function IuserprotectionserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["yh-pt"] && environment["yh-pt"].httpProtocol != null){
        httpProtocol = environment["yh-pt"].httpProtocol;
    }

    let contextPath: string = "/yh-pt";
    if(environment["yh-pt"] && environment["yh-pt"].contextPath != null){
        contextPath = environment["yh-pt"].contextPath;
    }

    let domain = environment.domain;
    if(environment["yh-pt"] && environment["yh-pt"].domain != null){
        domain = environment["yh-pt"].domain;
    }

    let url: string = httpProtocol + "://yh-pt" + domain + contextPath;
    return new IuserprotectionserviceApi(http, url, null);
}
export function IuserserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["yh-pt"] && environment["yh-pt"].httpProtocol != null){
        httpProtocol = environment["yh-pt"].httpProtocol;
    }

    let contextPath: string = "/yh-pt";
    if(environment["yh-pt"] && environment["yh-pt"].contextPath != null){
        contextPath = environment["yh-pt"].contextPath;
    }

    let domain = environment.domain;
    if(environment["yh-pt"] && environment["yh-pt"].domain != null){
        domain = environment["yh-pt"].domain;
    }

    let url: string = httpProtocol + "://yh-pt" + domain + contextPath;
    return new IuserserviceApi(http, url, null);
}
export function IaccountserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["zh-pt"] && environment["zh-pt"].httpProtocol != null){
        httpProtocol = environment["zh-pt"].httpProtocol;
    }

    let contextPath: string = "/zh-pt";
    if(environment["zh-pt"] && environment["zh-pt"].contextPath != null){
        contextPath = environment["zh-pt"].contextPath;
    }

    let domain = environment.domain;
    if(environment["zh-pt"] && environment["zh-pt"].domain != null){
        domain = environment["zh-pt"].domain;
    }

    let url: string = httpProtocol + "://zh-pt" + domain + contextPath;
    return new IaccountserviceApi(http, url, null);
}
export function IsecretserviceApiFactory(http: Http) {
    let httpProtocol: string = "http";
    if(environment["zh-pt"] && environment["zh-pt"].httpProtocol != null){
        httpProtocol = environment["zh-pt"].httpProtocol;
    }

    let contextPath: string = "/zh-pt";
    if(environment["zh-pt"] && environment["zh-pt"].contextPath != null){
        contextPath = environment["zh-pt"].contextPath;
    }

    let domain = environment.domain;
    if(environment["zh-pt"] && environment["zh-pt"].domain != null){
        domain = environment["zh-pt"].domain;
    }

    let url: string = httpProtocol + "://zh-pt" + domain + contextPath;
    return new IsecretserviceApi(http, url, null);
}

export const ApiProviders = [
    {
        provide: "IadministrativeareacodeserviceApiInterface",
        useFactory: IadministrativeareacodeserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IclasscategoryserviceApiInterface",
        useFactory: IclasscategoryserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IcourseserviceApiInterface",
        useFactory: IcourseserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IdifficultylevelserviceApiInterface",
        useFactory: IdifficultylevelserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IedulevelserviceApiInterface",
        useFactory: IedulevelserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IgradetypeserviceApiInterface",
        useFactory: IgradetypeserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "InationcodeserviceApiInterface",
        useFactory: InationcodeserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IorgtypeserviceApiInterface",
        useFactory: IorgtypeserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IroleinfoserviceApiInterface",
        useFactory: IroleinfoserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IschoolperiodgradetypeserviceApiInterface",
        useFactory: IschoolperiodgradetypeserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IschoolperiodserviceApiInterface",
        useFactory: IschoolperiodserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IschoolrunningtypeserviceApiInterface",
        useFactory: IschoolrunningtypeserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IschooltypeserviceApiInterface",
        useFactory: IschooltypeserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IsemesterserviceApiInterface",
        useFactory: IsemesterserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IsexcodeserviceApiInterface",
        useFactory: IsexcodeserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IkmcourseserviceApiInterface",
        useFactory: IkmcourseserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IkmdifficultyserviceApiInterface",
        useFactory: IkmdifficultyserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IknowledgemapserviceApiInterface",
        useFactory: IknowledgemapserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "ItestworkshopquestionsearchserviceApiInterface",
        useFactory: ItestworkshopquestionsearchserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IfileserviceApiInterface",
        useFactory: IfileserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IquestionimportcommandserviceApiInterface",
        useFactory: IquestionimportcommandserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IquestiontemplateserviceApiInterface",
        useFactory: IquestiontemplateserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "ItestcompletenessserviceApiInterface",
        useFactory: ItestcompletenessserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "ItestworkshopquestionserviceApiInterface",
        useFactory: ItestworkshopquestionserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IprotectionquestionserviceApiInterface",
        useFactory: IprotectionquestionserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IuseravatarserviceApiInterface",
        useFactory: IuseravatarserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IuserprotectionserviceApiInterface",
        useFactory: IuserprotectionserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IuserserviceApiInterface",
        useFactory: IuserserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IaccountserviceApiInterface",
        useFactory: IaccountserviceApiFactory,
        deps: [Http]
    },
    {
        provide: "IsecretserviceApiInterface",
        useFactory: IsecretserviceApiFactory,
        deps: [Http]
    },
];