[react-route-type](../README.md) / [Exports](../modules.md) / Route

# Interface: Route<Parts, QueryParams\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parts` | extends `string` |
| `QueryParams` | extends `QueryParamDefault` |

## Table of contents

### Properties

- [create](Route.md#create)
- [title](Route.md#title)

### Methods

- [createNestedRoutes](Route.md#createnestedroutes)
- [route](Route.md#route)
- [template](Route.md#template)
- [useCreate](Route.md#usecreate)
- [useMap](Route.md#usemap)
- [useParams](Route.md#useparams)
- [useQueryParams](Route.md#usequeryparams)

## Properties

### create

• **create**: `CreateFun`<`Parts`, `QueryParams`\>

#### Defined in

[interfaces/types.ts:41](https://github.com/hosseinmd/react-route-type/blob/72127c6/src/interfaces/types.ts#L41)

___

### title

• `Optional` **title**: `string`

#### Defined in

[interfaces/types.ts:38](https://github.com/hosseinmd/react-route-type/blob/72127c6/src/interfaces/types.ts#L38)

## Methods

### createNestedRoutes

▸ **createNestedRoutes**<`C`\>(`generator`): { `root`: [`Route`](Route.md)<`Parts`, `QueryParams`\>  } & `C`

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | (`parent`: [`Route`](Route.md)<`Parts`, `QueryParams`\>) => `C` |

#### Returns

{ `root`: [`Route`](Route.md)<`Parts`, `QueryParams`\>  } & `C`

#### Defined in

[interfaces/types.ts:62](https://github.com/hosseinmd/react-route-type/blob/72127c6/src/interfaces/types.ts#L62)

___

### route

▸ **route**<`Parts1`, `QueryParams1`\>(`arg`, `option?`): [`Route`](Route.md)<`Parts` \| `Parts1`, `QueryParams` & `QueryParams1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parts1` | extends `string` |
| `QueryParams1` | extends `QueryParamDefault` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Parts1` \| `Parts1`[] |
| `option?` | [`Options`](Options.md)<`QueryParams1`\> |

#### Returns

[`Route`](Route.md)<`Parts` \| `Parts1`, `QueryParams` & `QueryParams1`\>

#### Defined in

[interfaces/types.ts:43](https://github.com/hosseinmd/react-route-type/blob/72127c6/src/interfaces/types.ts#L43)

___

### template

▸ **template**(): `string`

#### Returns

`string`

#### Defined in

[interfaces/types.ts:39](https://github.com/hosseinmd/react-route-type/blob/72127c6/src/interfaces/types.ts#L39)

___

### useCreate

▸ **useCreate**<`T1`\>(`createParams`): `CreateFun`<`Exclude`<`Parts`, \`:${T1}\`\>, `QueryParams`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `createParams` | `T1`[] |

#### Returns

`CreateFun`<`Exclude`<`Parts`, \`:${T1}\`\>, `QueryParams`\>

#### Defined in

[interfaces/types.ts:51](https://github.com/hosseinmd/react-route-type/blob/72127c6/src/interfaces/types.ts#L51)

___

### useMap

▸ **useMap**(): { `path`: `string` \| `string`[] ; `title?`: `string` ; `create`: () => `string`  }[]

This is useful for create breadcrumbs

#### Returns

{ `path`: `string` \| `string`[] ; `title?`: `string` ; `create`: () => `string`  }[]

#### Defined in

[interfaces/types.ts:57](https://github.com/hosseinmd/react-route-type/blob/72127c6/src/interfaces/types.ts#L57)

___

### useParams

▸ **useParams**(): `Required`<`Params`<`PathParam`<`Parts`\>\>\>

#### Returns

`Required`<`Params`<`PathParam`<`Parts`\>\>\>

#### Defined in

[interfaces/types.ts:50](https://github.com/hosseinmd/react-route-type/blob/72127c6/src/interfaces/types.ts#L50)

___

### useQueryParams

▸ **useQueryParams**(): `Partial`<`QueryParams`\>

#### Returns

`Partial`<`QueryParams`\>

#### Defined in

[interfaces/types.ts:48](https://github.com/hosseinmd/react-route-type/blob/72127c6/src/interfaces/types.ts#L48)
