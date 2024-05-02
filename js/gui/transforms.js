import { GUI } from './guiClass';

import { TransformCommand } from '../commands/commands.js';

class TransformsGUI extends GUI {
    constructor(editor, args) {
        super(editor, args);

        this.domElement.classList.add('transformsGUI');
        this.parentDom.appendChild(this.domElement);
        this.editor = editor;


    }

    update() {
        let scope = this;
        scope.empty();

        let object = scope.editor.find('selected')[0];
        if (!object) return;

        

        let toHistory = function (func) {
            let command = new TransformCommand(scope.editor, object);
            object.updateMatrix();
            command.beforeMatrix = object.matrix.clone();

            func();

            object.updateMatrix();
            command.afterMatrix = object.matrix.clone();
            scope.editor.history.push(command);
        }

        const folderPosition = this.addFolder('Position');
        const propsPosition = {

            get 'X'() {

                return object.position.x;

            },
            set 'X'(v) {
                toHistory(function () {
                    object.position.setX(v);
                    scope.editor.render();
                });
            },

            get 'Y'() {

                return object.position.y;

            },
            set 'Y'(v) {
                toHistory(function () {
                    object.position.setY(v);
                    scope.editor.render();
                });
            },

            get 'Z'() {

                return object.position.z;

            },
            set 'Z'(v) {
                toHistory(function () {
                    object.position.setZ(v);
                    scope.editor.render();
                });
            },

        };
        folderPosition.add(propsPosition, 'X').listen();
        folderPosition.add(propsPosition, 'Y').listen();
        folderPosition.add(propsPosition, 'Z').listen();

        const folderRotation = this.addFolder('Rotation');
        const propsRotation = {

            get 'X'() {

                return object.rotation.x;

            },
            set 'X'(v) {
                toHistory(function () {
                    object.rotation.x = v;
                    scope.editor.render();
                });
            },

            get 'Y'() {

                return object.rotation.y;

            },
            set 'Y'(v) {
                toHistory(function () {
                    object.rotation.y = v;
                    scope.editor.render();
                });
            },

            get 'Z'() {

                return object.rotation.z;

            },
            set 'Z'(v) {
                toHistory(function () {
                    object.rotation.z = v;
                    scope.editor.render();
                });
            },

        };
        folderRotation.add(propsRotation, 'X', -Math.PI, Math.PI, Math.PI / 12).listen();
        folderRotation.add(propsRotation, 'Y', -Math.PI, Math.PI, Math.PI / 12).listen();
        folderRotation.add(propsRotation, 'Z', -Math.PI, Math.PI, Math.PI / 12).listen();

        const folderScale = this.addFolder('Scale');
        const propsScale = {

            get 'X'() {

                return object.scale.x;

            },
            set 'X'(v) {
                toHistory(function () {
                    object.scale.setX(v);
                    scope.editor.render();
                });
            },

            get 'Y'() {

                return object.scale.y;

            },
            set 'Y'(v) {
                toHistory(function () {
                    object.scale.setY(v);
                    scope.editor.render();
                });
            },

            get 'Z'() {

                return object.scale.z;

            },
            set 'Z'(v) {
                toHistory(function () {
                    object.scale.setZ(v);
                    scope.editor.render();
                });
            },

        };
        folderScale.add(propsScale, 'X').min(0.00001).listen();
        folderScale.add(propsScale, 'Y').min(0.00001).listen();
        folderScale.add(propsScale, 'Z').min(0.00001).listen();
    }


}

export { TransformsGUI };