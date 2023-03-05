**Use the Strategy pattern when you want to use different variants of an algorithm within an object and be able to switch from
  one algorithm to another during runtime.**

- The Strategy pattern lets you indirectly alter the object’s behavior at runtime by associating it with different sub-objects
  which can perform specific sub-tasks in different ways.

**Use the Strategy when you have a lot of similar classes that only differ in the way they execute some behavior.**

- The Strategy pattern lets you extract the varying behavior into a separate class hierarchy and combine the original classes
  into one, thereby reducing duplicate code.

**Use the pattern to isolate the business logic of a class from the implementation details of algorithms that may not be as
  important in the context of that logic.**

- The Strategy pattern lets you isolate the code, internal data, and dependencies of various algorithms from the rest of the
  code. Various clients get a simple interface to execute the algorithms and switch them at runtime.

**Use the pattern when your class has a massive conditional statement that switches between different variants of the same algorithm.**

- The Strategy pattern lets you do away with such a conditional by extracting all algorithms into separate classes, all of which implement the same interface. The original object delegates execution to one of these objects, instead of implementing all variants of the algorithm


## Pros ##
1. You can swap algorithms used inside an object at runtime.
2. You can isolate the implementation details of an algorithm from the code that uses it.
3. You can replace inheritance with composition.
4. Open/Closed Principle. You can introduce new strategies without having to change the context.

## Cons ##

1. If you only have a couple of algorithms, and they rarely change, there’s no real reason to overcomplicate the program with new
classes and interfaces that come along with the pattern.
2. Clients must be aware of the differences between strategies to be able to select a proper one.
3. A lot of modern programming languages have functional type support that lets you implement different versions of an algorithm inside a set of anonymous functions. Then you could use these functions exactly as you’d have used the strategy objects, but without bloating your code with extra classes and interfaces.
