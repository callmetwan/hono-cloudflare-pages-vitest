```txt
yarn install
npm run test
```

Results in vitest failing:
![vitest failure](<Screenshot 2024-04-15 at 10.23.25 PM.png>)

Commenting out the `build()` plugin in vite.config.ts results in tests passing. Something in the plugin is causing an issue.

Oddly, if you log the test method it seems it is actually defined

```tsx
import {test, expect} from "vitest";
console.log({test})
test("should pass", () => {
  expect(1 + 1).toBe(2);
})
```

```txt
stdout | src/index.test.tsx:2:9
{
  test: [Function: chain2] {
    each: [Function (anonymous)],
    skipIf: [Function (anonymous)],
    runIf: [Function (anonymous)],
    extend: [Function (anonymous)],
    withContext: [Function (anonymous)],
    setContext: [Function (anonymous)],
    mergeContext: [Function (anonymous)],
    fn: [Function (anonymous)] {
      each: [Function (anonymous)],
      skipIf: [Function (anonymous)],
      runIf: [Function (anonymous)],
      extend: [Function (anonymous)]
    }
  }
}
```