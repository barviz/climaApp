import { trigger, state, style, transition, animate, query, stagger } from "@angular/animations";
//tigger fc base de declaracion de una animacion en angular

export const showUpStaggered = trigger('showUpCollection',[
    transition('* => *',[ //de cualquier estado a cualquier estado
        query(':enter',[
            style({ opacity: 0, transform: 'scaleY(0)' }),
            stagger(70,[
                animate(300, style({ opacity: 1, transform: 'scaleY(1)' }))
            ])
        ],{optional: true})
    ])
])

//las transiciones ocurren entre estados(configuracion/pasos de la animacion)
//tipo de estado: in(cuando la animacion se está mostrando)
//tipo de transicion: enter(cuando la animacion pasa del estado void-no forma parte de la vista- al in)
export const showUp = trigger('showUpElement',[
    state('in',style({ opacity: 1, transform: 'scaleY(1)' })),
    transition(':enter',[
        style({opacity: 0, transform:'scaleY(0)'}),
        animate(250)
    ])
]);
