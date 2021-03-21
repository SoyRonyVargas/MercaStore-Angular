import {
    Component,
    Input,
    Output,
    EventEmitter,
    DoCheck,
    SimpleChanges,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    title = 'Hello';

    @Input() product: Product;

    @Output() AddToCart = new EventEmitter<any>();

    constructor() {
        console.log('1');
    }

    // ngOnChanges( changes: SimpleChanges ) {
    //     console.log('2. OnChanges');
    //     console.log(changes);
    // }

    ngOnInit() {
        console.log('3. OnInit');
    }

    ngDoCheck() {
        console.log('4. DoCheck');
    }

    ngOnDestroy() {
        console.log('5. OnDestroy');
    }

    agregarAlCarrito() {
        // debugger

        this.AddToCart.emit(this.product.id);
    }
    // product: Product = {
    //     id: '3',
    //     price: 100,
    //     image: 'http',
    //     title: 'Dildo xd',
    //     description: 'Some algo'
    // }
}
