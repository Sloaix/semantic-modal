import {ModalType, ModalSize, ModalAnimation} from './EnumType';
import Util from './Util';

export default class Modal {
    private _title: string;//标题
    private _content: string;//内容
    private _positiveCallback: Function;//positive按钮回调函数
    private _negativeCallback: Function;//negative按钮回调函数
    private _positiveText: string;//positive按钮文字
    private _negativeText: string;//negative按钮文字
    private _positiveIcon: string = 'ok';
    private _negativeIcon: string = 'remove';
    private _positiveAppendClasses: string;//positive按钮追加class
    private _negativeAppendClasses: string;//negative按钮追加class
    private _showPositiveButton: boolean;
    private _showNegativeButton: boolean;
    private _closeable: boolean;
    private _fullscreen: boolean;
    private _showCloseButton: boolean;
    private _modalAppendClasses: string;
    private _type: ModalType;
    private _size: ModalSize;
    private _titleIcon: string;
    private _duration: number = 400;
    private _animation: ModalAnimation = ModalAnimation.SCALE;

    private _id: string;
    private _$modal: any;
    private _init: boolean = false;

    constructor() {
        this._id = Util.guid();
    }

    set title(value: string) {
        this._title = value;
    }

    set content(value: string) {
        this._content = value;
    }

    set positiveCallback(value: Function) {
        this._positiveCallback = value;
    }

    set negativeCallback(value: Function) {
        this._negativeCallback = value;
    }

    set positiveText(value: string) {
        this._positiveText = value;
    }

    set negativeText(value: string) {
        this._negativeText = value;
    }

    set positiveAppendClasses(value: string) {
        this._positiveAppendClasses = value;
    }

    set negativeAppendClasses(value: string) {
        this._negativeAppendClasses = value;
    }

    set size(value: ModalSize) {
        this._size = value;
    }

    set closeable(value: boolean) {
        this._closeable = value;
    }

    set type(value: ModalType) {
        this._type = value;
    }

    set showPositiveButton(value: boolean) {
        this._showPositiveButton = value;
    }

    set showNegativeButton(value: boolean) {
        this._showNegativeButton = value;
    }

    set fullscreen(value: boolean) {
        this._fullscreen = value;
    }

    set showCloseButton(value: boolean) {
        this._showCloseButton = value;
    }


    set modalAppendClasses(value: string) {
        this._modalAppendClasses = value;
    }


    set positiveIcon(value: string) {
        this._positiveIcon = value;
    }

    set negativeIcon(value: string) {
        this._negativeIcon = value;
    }

    set titleIcon(value: string) {
        this._titleIcon = value;
    }


    set duration(value: number) {
        this._duration = value;
    }

    set animation(value: ModalAnimation) {
        this._animation = value;
    }

    private init(): Modal {
        if (this._init) {
            return;
        }
        this._$modal = this.createSemanticModalInstance();
        this._init = true;
        return this;
    }

    private createSemanticModalInstance(): any {
        let $: any = (<any>window).jQuery || (<any>window).$;

        let setting: any = {
            closable: this._closeable,
            duration: this._duration,
            transition: ModalAnimation[this._animation].toLowerCase()
        };

        //size
        let sizeClass = '';
        switch (this._size) {
            case ModalSize.SMALL: {
                sizeClass = 'small';
                break;
            }
            case ModalSize.LARGE: {
                sizeClass = 'large';
                break;
            }
            case ModalSize.NORMAL:
            default:
        }

        //modal
        let $modal = $(`<div class='ui ${sizeClass} modal' id='${this._id}'></div>`);

        //append class
        if (this._modalAppendClasses) {
            $modal.addClass(this._modalAppendClasses);
        }

        //type
        let isBasic: boolean = false;
        if (this._type == ModalType.BASIC) {
            isBasic = true;
            $modal.addClass('basic');
        }

        //close按钮
        if (this._showCloseButton) {
            let closeButtonAppendClasses = isBasic ? 'white' : 'black';
            $modal.append(`<i class='close icon ${closeButtonAppendClasses}' style='top: 0.5rem;right: 0.5rem'></i>`);
        }

        //全屏
        if (this._fullscreen) {
            $modal.addClass('fullscreen');
        }


        //标题
        if (this._title) {
            let $header: any = $(`<div class='ui header ${isBasic ? 'icon' : ''}' style='${isBasic ? ';text-align:center;' : ''};word-break: break-all;word-wrap: break-word'>${this._title}</div>`);
            let $titleIcon: any = this._titleIcon ? $(`<i class='icon ${this._titleIcon}'></i>`) : null;
            if ($titleIcon) {
                $header.prepend($titleIcon);
            }
            $modal.append($header);
        }

        //内容
        if (this._content) {
            $modal.append(`<div class='content' style='${isBasic ? ';text-align:center;' : ''}${!this._title ? ';margin-top:1.5rem;' : ''}'><p style='word-break: break-all;word-wrap: break-word'>${this._content}</p></div>`);
        }

        //actions按钮
        let $actions: any = $(`<div class='actions' style='border: none;background:none;${isBasic ? 'text-align:center;' : ''}'></div>`);
        if (this._showNegativeButton) {
            if (isBasic) {
                this._negativeAppendClasses += ' red basic inverted ';
            }
            let $button: any = $(`<div class='ui mini negative button ${this._negativeAppendClasses}'>${this._negativeText}</div>`);
            if (this._negativeIcon) {
                $button.prepend(`<i class='${this._negativeIcon} icon'></i>`);
            }
            $actions.append($button);
        }

        if (this._showPositiveButton) {
            if (isBasic) {
                this._positiveAppendClasses += ' green inverted ';
            }
            let $button = $(`<div class='ui mini positive button ${this._positiveAppendClasses}'>${this._positiveText}</div>`);
            if (this._positiveIcon) {
                $button.prepend(`<i class='${this._positiveIcon} icon'></i>`);
            }
            $actions.append($button);
        }

        if ($actions.children('.ui.button').length > 0) {
            $modal.append($actions);
        }
        //回调函数
        if (this._positiveCallback instanceof Function) {
            setting.onApprove = this._positiveCallback;
        }
        else {
            throw new Error(`the positive callback must be a function,but you provide a  ${typeof this._positiveCallback}.`);
        }

        if (this._negativeCallback instanceof Function) {
            setting.onDeny = this._negativeCallback;
        }
        else {
            throw new Error(`the negative callback must be a function,but you provide a ${typeof this._negativeCallback}.`);
        }

        $modal.modal(setting);

        return $modal;
    }

    public show(): void {
        this.modalInvoke('show');
    }

    public hide(): void {
        this.modalInvoke('hide');
    }

    public toggle(): void {
        this.modalInvoke('toggle');
    }

    private modalInvoke(method: string): any {
        this.init();
        return this._$modal.modal(method);
    }
}