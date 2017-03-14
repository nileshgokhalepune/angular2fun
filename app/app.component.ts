import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <nav class="navbar navbar-default">
            <label class="label pull-right" [style.position]="'absolute'" [style.top]="'0'" [style.right]="'0'">Environment: <span class="text text-warning">{{env}}</span></label>
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">INGRAM</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Algorithms<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a [routerLink]="['bubblesort']">Bubble Sort</a></li>                                
                                <li><a [routerLink]="['selectionsort']">Selection Sort</a></li>                                
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Math<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a [routerLink]="['closestpair']">Find closest pair</a></li>                                
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid --> 
        </nav>
        <div class="container main">
            <router-outlet></router-outlet>
        </div> 
    `
})
export class AppComponent {

}