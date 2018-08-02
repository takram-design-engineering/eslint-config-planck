// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

// arrow-body-style
{
  const veryLongNameFunction = () => {
    return 'this is very long but still a single statement'
  }
  veryLongNameFunction()
}

// arrow-parens
{
  const f = a => b => c => {
    return a + b + c
  }
  f(1)(2)(3)
}

// class-methods-use-this
{
  class T {
    f() {}
  }
  new T().f()
}

// no-bitwise
{
  function f(v) {}
  const v = 1 << 24
  f(v)
}

// no-empty
try {
  throw new Error()
} catch (error) {}

// new-cap
{
  class T {
    f() {}
  }
  const indirectClass = T
  const t = new indirectClass()
  t.f()
}

// no-mixed-operators
{
  function f() {}
  const v = 1 * 2 + 3
  f(v)
}

// no-nested-ternary
{
  function f(a, b) {
    return (a > b) ? 1 : (a < b) ? -1 : 0
  }
  f(1, 2)
}

// no-plusplus
{
  function f() {}
  let i = 0
  ++i
  i++
  f(i)
}

// no-shadow
{
  function f() {}
  const a = 0
  {
    const a = 0
    f(a)
  }
  f(a)
}

// no-unused-vars
{
  function f(a) {}
  f()
}

// semi-style
{
  function f(a) {}
  let a = 0
  const b = { a: 1 }
  ;({ a } = b)
  f(a)
}
