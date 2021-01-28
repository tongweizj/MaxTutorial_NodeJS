



# GraphQL 技术概要



# Part 1 What is GraphQL



# **GraphQL简介**

- GraphQL是一种新的API标准，它提供了一种比REST更有效、更强大和更灵活的替代方案。
- 它是由Facebook开发并开源的，现在由来自世界各地的公司和个人组成的大型社区维护。
- GraphQL本质上是一种基于api的查询语言，现在大多数应用程序都需要从服务器中获取数据，这些数据存储可能存储在数据库中，API的职责是提供与应用程序需求相匹配的存储数据的接口。
- 它是数据库无关的，而且可以在使用API的任何环境中有效使用，我们可以理解为GraphQL是基于API之上的一层封装，目的是为了更好，更灵活的适用于业务的需求变化。

简单的来说，它



# **GraphQL 思考模式**

使用GraphQL接口设计获取数据需要三步：

![Image](https://mmbiz.qpic.cn/mmbiz_gif/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67BaNTo5DWT5CgnTK6DOCiaYa7qm5OicfUGOq4mskdKHpXVDcld5uvN8fA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

GraphQL获取数据三步骤



1. 首先要设计数据模型，用来描述数据对象，它的作用可以看做是VO，用于告知GraphQL如何来描述定义的数据，为下一步查询返回做准备；
2. 前端使用模式查询语言（Schema）来描述需要请求的数据对象类型和具体需要的字段（称之为声明式数据获取）；
3. 后端GraphQL通过前端传过来的请求，根据需要，自动组装数据字段，返回给前端。

GraphQL的这种思考模式是不是完美解决了之前遇到的问题呢？！

总结它的好处：

> 在它的设计思想中，GraphQL 以图的形式将整个 Web 服务中的资源展示出来，客户端可以按照其需求自行调用，类似添加字段的需求其实就不再需要后端多次修改了。

创建GraphQL服务器的最终目标是：

> 允许查询通过图和节点的形式去获取数据。



# **GraphQL执行逻辑**

有人会问：



- 使用了GraphQL就要完全抛弃REST了吗？
- GraphQL需要直接对接数据库吗？
- 使用GraphQL需要对现有的后端服务进行大刀阔斧的修改吗？



答案是：NO！不需要！



它完全可以以一种不侵入的方式来部署，将它作为前后端的中间服务，也就是，现在开始逐渐流行的 前端 —— 中端 —— 后端 的三层结构模式来部署！



那就来看一下这样的部署模式图：

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67K36gwt4GvXGyibZU6CA01XmnbfTj0XmQ2C0awMor0yUic1W0DphJyZgQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)GraphQL执行逻辑

也就是说，完全可以搭建一个GraphQL服务器，专门来处理前端请求，并处理后端服务获取的数据，重新进行组装、筛选、过滤，将完美符合前端需要的数据返回。

新的开发需求可以直接就使用GraphQL服务来获取数据了，以前已经上线的功能无需改动，还是使用原有请求调用REST接口的方式，最低程度的降低更换GraphQL带来的技术成本问题！

如果没有那么多成本来支撑改造，那么就不需要改造！

只有当原有需求发生变化，需要对原功能进行修改时，就可以换成GraphQL了。

# **GraphQL应用的基本架构**

下图是一个 GraphQL 应用的基本架构，其中客户端只和 GraphQL 层进行 API 交互，而 GraphQL 层再往后接入各种数据源。这样一来，只要是数据源有的数据， GraphQL 层都可以让客户端按需获取，不必专门再去定接口了。

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB677ZmGGAaqfN7w2c4X0kdsLLeVjTo8yLQl5GZNpslibD0ujWJgRqVGrRw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)GraphQL应用基本架构

一个GraphQL服务仅暴露一个 GraphQL Endpoint，可以按照业务来进行区分，部署多个GraphQL服务，分管不同的业务数据，这样就可以避免单服务器压力过大的问题了。

# **GraphQL特点总结**

- 声明式数据获取（可以对API进行查询）: 声明式的数据查询带来了接口的精确返回，服务器会按数据查询的格式返回同样结构的 JSON 数据、真正照顾了客户端的灵活性。
- 一个微服务仅暴露一个 GraphQL 层：一个微服务只需暴露一个GraphQL endpoint，客户端请求相应数据只通过该端点按需获取，不需要再额外定义其他接口。
- 传输层无关、数据库技术无关：带来了更灵活的技术栈选择，比如我们可以选择对移动设备友好的协议，将网络传输数据量最小化，实现在网络协议层面优化应用。

------

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67OFiaQ3X86uxiaJy4bYnvHNT3KqBsU41NZqjHiaD8f8LHzKck9dxLChBicA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)Part 2 Schema & Type

# **GraphQL支持的数据操作**

GraphQL对数据支持的操作有：

- 查询（Query）：获取数据的基本查询。
- 变更（Mutation）：支持对数据的增删改等操作。
- 订阅（Subscription）：用于监听数据变动、并靠websocket等协议推送变动的消息给对方。

![Image](https://mmbiz.qpic.cn/mmbiz_gif/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67EeIZFVJEdPEBPXj0ibfa7pquxdwKToCsSJ4yiblxbTTYWzupb7s8gysA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)GraphQL支持的操作

# **GraphQL的核心概念：图表模式（Schema）**

要想要设计GraphQL的数据模型，用来描述你的业务数据，那么就必须要有一套Schema语法来做支撑。

想要描述数据，就必须离不开数据类型的定义。所以GraphQL设计了一套Schema模式（可以理解为语法），其中最重要的就是数据类型的定义和支持。

那么类型（Type）就是模式（Schema）最核心的东西了。

什么是类型？

- 对于数据模型的抽象是通过类型（Type）来描述的，每一个类型有若干字段（Field）组成，每个字段又分别指向某个类型（Type）。这很像Java、C#中的类（Class）。
- GraphQL的Type简单可以分为两种，一种叫做Scalar Type(标量类型)，另一种叫做Object Type(对象类型)。

那么就分别来介绍下两种类型。

# **标量类型（Scalar Type）**

标量是GraphQL类型系统中最小的颗粒。类似于Java、C#中的基本类型。

其中内建标量主要有：

- String
- Int
- Float
- Boolean
- Enum
- ID

![Image](https://mmbiz.qpic.cn/mmbiz_gif/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67FlGO0uqSMmKLq8S5ib5wy43V6krQHZCqUu1Gzibz9ZV01lbN8rQKT1JQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)Scalar Type

上面的类型仅仅是GraphQL默认内置的类型，当然，为了保证最大的灵活性，GraphQL还可以很灵活的自行创建标量类型。

# **对象类型（Object Type）**

仅有标量类型是不能满足复杂抽象数据模型的需要，这时候我们可以使用对象类型。

通过对象模型来构建GraphQL中关于一个数据模型的形状，同时还可以声明各个模型之间的内在关联（一对多、一对一或多对多）。

对象类型的定义可以参考下图：

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67zAmsq5bYZpfCV9n9fBP1oW5oWbOgHicjaic8biaBicewCMrwyqs6KHYWBQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)对象模型引入关联关系

是不是很方便呢？我们可以像设计类图一样来设计GraphQL的对象模型。

# **类型修饰符（Type Modifier）**

那么，类型系统仅仅只有类型定义是不够的，我们还需要对类型进行更广泛性的描述。

类型修饰符就是用来修饰类型，以达到额外的数据类型要求控制。

比如：

- 列表：[Type]
- 非空：Type!
- 列表非空：[Type]!
- 非空列表，列表内容类型非空：[Type!]!

在描述数据模型（模式Schema）时，就可以对字段施加限制条件。

例如定义了一个名为User的对象类型，并对其字段进行定义和施加限制条件：

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67Kzlh22KIzR0ericqBsic9ib2sna6gSzOalStIlBRK3CictTCliblzic6rcLw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)User字段控制

那么，返回数据时，像下面这种情况就是不允许的：

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB679Uhx0jQ8HJKU5RbqYbYVddwvEm35Z03d27J1b4Z2gyEgJntAAoeu5Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)错误的表示

Graphql会根据Schema Type来自动返回正确的数据：

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67uuStnYImZsLicr4FTf4z5F5Cia117klCoGKopZOPxl8altK87KzSuhjg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)正确的表示

# **其他类型**

除了上面的，Graphql还有一些其他类型来更好的引入面向对象的设计思想：

- 接口类型（Interfaces）：其他对象类型实现接口必须包含接口所有的字段，并具有相同的类型修饰符，才算实现接口。

比如定义了一个接口类型：

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67qV6RDTSMJwSDaQzPcxzibcXchkqdWBW3BlI963vnZmZHopZicR8HPx4g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

那么就可以实现该接口：

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67tXM8wPLaQH1dIGReXiaxkwjicEwtK5oRUtjag2Uian6Ntb7vooD3DyJvw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 联合类型（Union Types）：联合类型和接口十分相似，但是它并不指定类型之间的任何共同字段。几个对象类型共用一个联合类型。

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67XibRUSqtyrEOuZqSo2cjomRHUSOeDaYfGFnTrUrYbDKOaXSNJOyMzmw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 输入类型（Input Types）：更新数据时有用，与常规对象只有关键字修饰不一样，常规对象时 type 修饰，输入类型是 input 修饰。

比如定义了一个输入类型：

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67AkyLY5ooHbm6Cxc9deleVjvDWoChKsVibxrqeS8j6WuPMBERTU4CQXQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

前端发送变更请求时就可以使用（通过参数来指定输入的类型）：

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67BEu72Lo50SXqxcIvd5OG60BVfQgDb511JKJSKPsl04tMkkXdjfGz4w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

所以，这样面向对象的设计方式，真的对后端开发人员特别友好！而且前端MVVM框架流行以来，面向对象的设计思想也越来越流行，前端使用Graphql也会得心应手。

------

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB6764uoRo2iaDPqJ8PBOp65YFtWOlZUNsk1XMZZzKYLtltZUHWNFmuCW5Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Part 3 GraphQL技术接入架构

# **Graphql 技术接入架构**

那么，该怎么设计来接入我们现有的系统中呢？

- 将Graphql服务直连数据库的方式：最简洁的配置，直接操作数据库能减少中间环节的性能消耗。

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67sBV0ia3zzjA9xxUDvDpDkEBgzichUFPGVFEiaK8MBWofbzkvgtXayujPg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)直连数据库的接入

- 集成现有服务的GraphQL层：这种配置适合于旧服务的改造，尤其是在涉及第三方服务时、依然可以通过原有接口进行交互。

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB67BaIKPHQTSwplcibWZfBppH5A5NojXZqdkzTqY2KzbooIjyjRyXq8EqQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)集成现有服务的GraphQL层

- 直连数据库和集成服务的混合模式：前两种方式的混合。

![Image](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbufg8LpbicwTkRzQ2A0roUB673jFgPKOiazCAeKoxlUUdZEh6ic4pg2LGV68sVqibEWFfhbibTDQgbhZBRg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)