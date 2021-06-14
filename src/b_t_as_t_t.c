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

#include "stdlib/strided/base/unary/b_t_as_t_t.h"
#include "stdlib/strided/base/unary/typedefs.h"
#include "stdlib/strided/base/unary/macros.h"
#include <stdint.h>

/**
* Applies a unary callback accepting and returning unsigned 16-bit integers to an unsigned 8-bit integer strided input array and assigns results to elements in an unsigned 16-bit integer strided output array.
*
* @param arrays   array whose first element is a pointer to a strided input array and whose last element is a pointer to a strided output array
* @param shape    array whose only element is the number of elements over which to iterate
* @param strides  array containing strides (in bytes) for each strided array
* @param fcn      callback
*
* @example
* #include "stdlib/strided/base/unary/b_t_as_t_t.h"
* #include <stdint.h>
*
* // Create underlying byte arrays:
* uint8_t x[] = { 0, 0, 0 };
* uint8_t out[] = { 0, 0, 0, 0, 0, 0 };
*
* // Define a pointer to an array containing pointers to strided arrays:
* uint8_t *arrays[] = { x, out };
*
* // Define the strides:
* int64_t strides[] = { 1, 2 }; // 1 byte per uint8, 2 bytes per uint16
*
* // Define the number of elements over which to iterate:
* int64_t shape[] = { 3 };
*
* // Define a callback:
* uint16_t scale( const uint16_t x ) {
*     return x + 10;
* }
*
* // Apply the callback:
* stdlib_strided_b_t_as_t_t( arrays, shape, strides, (void *)scale );
*/
void stdlib_strided_b_t_as_t_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn ) {
	UnaryFcnUint16 *f = (UnaryFcnUint16 *)fcn;
	STDLIB_STRIDED_UNARY_LOOP_CLBK_ARG_CAST( uint8_t, uint16_t, uint16_t )
}
