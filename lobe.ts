namespace timer {
    //% block="on object recognized do"
    //% handlerStatement=1
    export function after(action: (class : string) => void) {
	action("main")
    }
}
