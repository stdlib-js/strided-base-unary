/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/*
* The following is auto-generated. Do not manually edit. See scripts/loops.js.
*/

#include "stdlib/strided/base/unary/t_d_as_t_d.h"
#include "stdlib/strided/base/unary/macros.h"
#include <stdint.h>

/**
* Applies a unary callback to strided input array elements and assigns results to elements in a strided output array.
*
* @param arrays   array whose first element is a pointer to a strided input array and whose second element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/base/unary/t_d_as_t_d.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, out };
*
* // Define the strides:
* int64_t strides[] = { 2, 8 };
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* static double fcn( uint16_t x ) {
*     // ...
* }
*
* // Apply the callback:
* stdlib_strided_t_d_as_t_d( arrays, shape, strides, (void *)fcn );
*/
void stdlib_strided_t_d_as_t_d( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn ) {
	typedef double func_type( const uint16_t x );
	func_type *f = (func_type *)fcn;
	STDLIB_STRIDED_UNARY_LOOP_CLBK( uint16_t, double )
}
