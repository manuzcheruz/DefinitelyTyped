// Type definitions for react-reveal 1.2
// Project: https://github.com/rnosov/react-reveal
// Definitions by: manuzcheruz <https://github.com/manuzcheruz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

interface SimpleParams {
    duration: number;
    timeout: number;
    delay: number;
    count: number;
    forever: boolean;
}

interface InAndOutParams extends SimpleParams {
    out: boolean;
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
    mirror: boolean;
    opposite: boolean;
}

interface WrapParams {
    props: any;
    inEffect: boolean;
    outEffect: any;
    children: any;
}

export default function Bounce(params: InAndOutParams, ...props: any[]): void;
export default function Fade(params: InAndOutParams, context: boolean, ...props: any[]): void;
export default function Flip(params: InAndOutParams, ...props: any[]): void;
export default function LightSpeed(params: InAndOutParams, ...props: any[]): void;
export default function Roll(params: InAndOutParams, ...props: any[]): void;
export default function Rotate(params: InAndOutParams, ...props: any[]): void;
export default function Slide(params: InAndOutParams, ...props: any[]): void;
export default function Zoom(params: InAndOutParams, ...props: any[]): void;

export function Flash(params: SimpleParams): void;
export function HeadShake(params: SimpleParams): void;
export function Jello(params: SimpleParams): void;
export function Jump(params: SimpleParams): void;
export function Pulse(params: SimpleParams): void;
export function RubberBand(params: SimpleParams): void;
export function Shake(params: SimpleParams): void;
export function Spin(params: SimpleParams): void;
export function Swing(params: SimpleParams): void;
export function Tada(params: SimpleParams): void;
export function Wobble(params: SimpleParams): void;
