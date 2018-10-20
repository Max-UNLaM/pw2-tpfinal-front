export interface MessageModalViewmodel {
    title: string;
    message: string;
    defaultRoute: string[];
    buttons: ReditectButton[];
}

export interface ReditectButton {
    title: string;
    callback: () => void;
}
