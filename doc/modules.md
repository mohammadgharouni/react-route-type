[react-route-type](README.md) / Exports

# react-route-type

## Table of contents

### Interfaces

- [Options](interfaces/Options.md)
- [Route](interfaces/Route.md)

### Functions

- [route](modules.md#route)

## Functions

### route

▸ `Const` **route**<`T`, `Q`\>(`path`, `option?`): [`Route`](interfaces/Route.md)<`T`, `Q`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `Q` | extends `QueryParamDefault` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `T` \| `T`[] |
| `option?` | [`Options`](interfaces/Options.md)<`Q`\> |

#### Returns

[`Route`](interfaces/Route.md)<`T`, `Q`\>

#### Defined in

[route.ts:176](https://github.com/hosseinmd/react-route-type/blob/30eb8c1/src/route.ts#L176)
