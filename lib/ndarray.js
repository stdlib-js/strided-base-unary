/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isAccessorArray = require( '@stdlib/array-base-assert-is-accessor-array' );
var accessorGetter = require( '@stdlib/array-base-accessor-getter' );
var accessorSetter = require( '@stdlib/array-base-accessor-setter' );
var getter = require( '@stdlib/array-base-getter' );
var setter = require( '@stdlib/array-base-setter' );
var dtype = require( '@stdlib/array-dtype' );
var strided = require( './unary.ndarray.js' );
var accessors = require( './accessors.ndarray.js' );


// MAIN //

/**
* Applies a unary callback to elements in a strided input array and assigns results to elements in a strided output array.
*
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing one input array and one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride lengths for the input and output arrays
* @param {NonNegativeIntegerArray} offsets - array-like object containing the starting indices (i.e., index offsets) for the input and output arrays
* @param {Callback} fcn - unary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1 ];
* var offsets = [ 0, 0 ];
*
* unary( [ x, y ], shape, strides, offsets, scale );
*
* console.log( y );
* // => <Float64Array>[ 10.0, 20.0, 30.0, 40.0, 50.0 ]
*/
function unary( arrays, shape, strides, offsets, fcn ) {
	var xget;
	var yset;
	var x;
	var y;

	x = arrays[ 0 ];
	if ( isAccessorArray( x ) ) {
		xget = accessorGetter( dtype( x ) );
	}
	y = arrays[ 1 ];
	if ( isAccessorArray( y ) ) {
		yset = accessorSetter( dtype( y ) );
	}
	if ( xget || yset ) {
		xget = xget || getter( dtype( x ) );
		yset = yset || setter( dtype( y ) );
		return accessors( arrays, shape, strides, offsets, [ xget, yset ], fcn ); // eslint-disable-line max-len
	}
	return strided( arrays, shape, strides, offsets, fcn );
}


// EXPORTS //

module.exports = unary;
