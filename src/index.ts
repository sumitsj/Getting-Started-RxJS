class DemoClass {

    constructor(private name: string){
    }

    notify(): void {
        document.querySelector("h1").textContent = `Getting Started with ${this.name}`;
    }
}

new DemoClass("RxJS").notify();
