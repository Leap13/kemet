/**
 * External dependencies
 */
import {
    pickBy, isEmpty, isObject, identity, mapValues, first,
    get,
    has,
    isString,
    startsWith
} from 'lodash';
import {
    __EXPERIMENTAL_STYLE_PROPERTY as STYLE_PROPERTY,
} from '@wordpress/blocks';

/**
 * Removed falsy values from nested object.
 *
 * @param {*} object
 * @return {*} Object cleaned from falsy values
 */
export const cleanEmptyObject = (object) => {
    if (!isObject(object) || Array.isArray(object)) {
        return object;
    }
    const cleanedNestedObjects = pickBy(
        mapValues(object, cleanEmptyObject),
        identity
    );
    return isEmpty(cleanedNestedObjects) ? undefined : cleanedNestedObjects;
};

const VARIABLE_REFERENCE_PREFIX = 'var:';
const VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE = '|';
const VARIABLE_PATH_SEPARATOR_TOKEN_STYLE = '--';
function compileStyleValue(uncompiledValue) {
    if (startsWith(uncompiledValue, VARIABLE_REFERENCE_PREFIX)) {
        const variable = uncompiledValue
            .slice(VARIABLE_REFERENCE_PREFIX.length)
            .split(VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE)
            .join(VARIABLE_PATH_SEPARATOR_TOKEN_STYLE);
        return `var(--wp--${variable})`;
    }
    return uncompiledValue;
}


/**
 * Returns the inline styles to add depending on the style object
 *
 * @param {Object} styles Styles configuration.
 *
 * @return {Object} Flattened CSS variables declaration.
 */
export function getInlineStyles(styles = {}) {
    const output = {};
    Object.keys(STYLE_PROPERTY).forEach((propKey) => {
        const path = STYLE_PROPERTY[propKey].value;
        const subPaths = STYLE_PROPERTY[propKey].properties;
        // Ignore styles on elements because they are handled on the server.
        if (has(styles, path) && 'elements' !== first(path)) {
            // Checking if style value is a string allows for shorthand css
            // option and backwards compatibility for border radius support.
            const styleValue = get(styles, path);

            if (!!subPaths && !isString(styleValue)) {
                Object.entries(subPaths).forEach((entry) => {
                    const [name, subPath] = entry;
                    const value = get(styleValue, [subPath]);

                    if (value) {
                        output[name] = compileStyleValue(value);
                    }
                });
            } else {
                output[propKey] = compileStyleValue(get(styles, path));
            }
        }
    });

    return output;
}