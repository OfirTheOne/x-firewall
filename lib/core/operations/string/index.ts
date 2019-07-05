import { BrickFn } from "../../../models";
import { BrickError } from "../../brick-error";
import { generateBrick } from "../generate-brick";
import { _isIntegerString, _isBooleanString } from "./validation-logic";

export function isIntegerString(path: string, error?: ErrorConstructor | string): BrickFn {
    const _error = new BrickError(`%s is not pass as integer string`, 'isIntegerString');
    return generateBrick(
        _isIntegerString, undefined,
        path, 
        _error
    );
    
}


export function isBooleanString(path: string, error?: ErrorConstructor | string): BrickFn {
    const _error = new BrickError(`%s is not pass as boolean string`, 'isBooleanString');
    return generateBrick(
        _isBooleanString, undefined,
        path, 
        _error
    );
    
}