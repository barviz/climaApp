import { trigger,style,animate,query,stagger,transition } from '@angular/animations';

export const loadingAnimation = function(){
    return trigger('loading',[
        transition('* => *',[ //* * de lo sea a lo que sea
            query(':leave', [
                stagger(100, [ //retraso
                    animate('350ms', style({ opacity: 0 }))
                ])
            ], { optional: true }),
            query(':enter',[
                style({opacity:0}),
                stagger(100,[
                    animate('350ms',style({opacity:1}))
                ])
            ],{optional:true}) //para que no tire error si no hay elemento
        ])
    ]);
}

//arreglo de todas las transiciones
