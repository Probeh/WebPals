'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">WebPals-Hub</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link">AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-6c2422db39bf23849745577b41af926e"' : 'data-target="#xs-components-links-module-AccountModule-6c2422db39bf23849745577b41af926e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-6c2422db39bf23849745577b41af926e"' :
                                            'id="xs-components-links-module-AccountModule-6c2422db39bf23849745577b41af926e"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountModule-6c2422db39bf23849745577b41af926e"' : 'data-target="#xs-injectables-links-module-AccountModule-6c2422db39bf23849745577b41af926e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountModule-6c2422db39bf23849745577b41af926e"' :
                                        'id="xs-injectables-links-module-AccountModule-6c2422db39bf23849745577b41af926e"' }>
                                        <li class="link">
                                            <a href="injectables/MessageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MessageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link">AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f43c6382f8cc0e76398618543148b3b6"' : 'data-target="#xs-components-links-module-AppModule-f43c6382f8cc0e76398618543148b3b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f43c6382f8cc0e76398618543148b3b6"' :
                                            'id="xs-components-links-module-AppModule-f43c6382f8cc0e76398618543148b3b6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-f43c6382f8cc0e76398618543148b3b6"' : 'data-target="#xs-injectables-links-module-AppModule-f43c6382f8cc0e76398618543148b3b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f43c6382f8cc0e76398618543148b3b6"' :
                                        'id="xs-injectables-links-module-AppModule-f43c6382f8cc0e76398618543148b3b6"' }>
                                        <li class="link">
                                            <a href="injectables/IdentityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>IdentityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContainerModule.html" data-type="entity-link">ContainerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContainerModule-ec24d8f1baca48268312aab89b749740"' : 'data-target="#xs-components-links-module-ContainerModule-ec24d8f1baca48268312aab89b749740"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContainerModule-ec24d8f1baca48268312aab89b749740"' :
                                            'id="xs-components-links-module-ContainerModule-ec24d8f1baca48268312aab89b749740"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContainerModule-ec24d8f1baca48268312aab89b749740"' : 'data-target="#xs-injectables-links-module-ContainerModule-ec24d8f1baca48268312aab89b749740"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContainerModule-ec24d8f1baca48268312aab89b749740"' :
                                        'id="xs-injectables-links-module-ContainerModule-ec24d8f1baca48268312aab89b749740"' }>
                                        <li class="link">
                                            <a href="injectables/ContainerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ContainerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GithubService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GithubService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NetworkService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NetworkService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContainerRoutingModule.html" data-type="entity-link">ContainerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GithubModule.html" data-type="entity-link">GithubModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GithubModule-f961d2c6fadf53c0d57b91a9ddece291"' : 'data-target="#xs-components-links-module-GithubModule-f961d2c6fadf53c0d57b91a9ddece291"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GithubModule-f961d2c6fadf53c0d57b91a9ddece291"' :
                                            'id="xs-components-links-module-GithubModule-f961d2c6fadf53c0d57b91a9ddece291"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GithubRoutingModule.html" data-type="entity-link">GithubRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ContainerComponent.html" data-type="entity-link">ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GithubComponent.html" data-type="entity-link">GithubComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GitProfileComponent.html" data-type="entity-link">GitProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GitResultComponent.html" data-type="entity-link">GitResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GitSearchComponent.html" data-type="entity-link">GitSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarComponent.html" data-type="entity-link">NavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidenavComponent.html" data-type="entity-link">SidenavComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccountModel.html" data-type="entity-link">AccountModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppConfig.html" data-type="entity-link">AppConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/GitProfile.html" data-type="entity-link">GitProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/GitSearch.html" data-type="entity-link">GitSearch</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ContainerService.html" data-type="entity-link">ContainerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GithubService.html" data-type="entity-link">GithubService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IdentityService.html" data-type="entity-link">IdentityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link">MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkService.html" data-type="entity-link">NetworkService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/IdentityInterceptor.html" data-type="entity-link">IdentityInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/NetworkInterceptor.html" data-type="entity-link">NetworkInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAccountModel.html" data-type="entity-link">IAccountModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppConfig.html" data-type="entity-link">IAppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHttpRequest.html" data-type="entity-link">IHttpRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISearchParams.html" data-type="entity-link">ISearchParams</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});