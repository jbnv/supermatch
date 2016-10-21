# supermatch

`supermatch(subject,object)`

Returns `true` if any of the following are true:

* Either `subject` or `object` are `true`.
* `subject` and `object` are both scalars and match identically.
* `subject` is a scalar and `object` is a RegExp and `subject` matches `object`.
* `subject` is a scalar and `object` is an array and `subject` matches any in `object`.
* `subject` is a scalar and `object` is a true-array (an object in which all values are `true`) and `subject` matches any in `object`.
* `subject` is an array and any item in `subject` matches `object`.
* `subject` is a true-array  and any item in `subject` matches `object`.
