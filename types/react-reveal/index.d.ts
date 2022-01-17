// Type definitions for react-reveal 1.2
// Project: https://github.com/rnosov/react-reveal
// Definitions by: manuzcheruz <https://github.com/manuzcheruz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SimpleProps {
    duration: number;
    timeout: number;
    delay: number;
    count: number;
    forever: boolean;
}

export function Flash(props: SimpleProps): void;
export function HeadShake(props: SimpleProps): void;
export function Jello(props: SimpleProps): void;
export function Jump(props: SimpleProps): void;
export function Pulse(props: SimpleProps): void;
export function RubberBand(props: SimpleProps): void;
export function Shake(props: SimpleProps): void;
export function Spin(props: SimpleProps): void;