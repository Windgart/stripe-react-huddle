import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: 'Cat';
  id: Scalars['Int'];
  name: Scalars['String'];
  picture: Scalars['String'];
  displayPrice: Scalars['String'];
  chargePrice: Scalars['Int'];
  description: Scalars['String'];
};

export type DataResponsePi = {
  __typename?: 'DataResponsePI';
  clientSecret: Scalars['String'];
};

export type DataResponsePm = {
  __typename?: 'DataResponsePM';
  methodId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPaymentIntent: Maybe<PaymentIntentResponse>;
  createPaymentMethod: Maybe<PaymentMethodResponse>;
};


export type MutationCreatePaymentIntentArgs = {
  payload: PaymentIntentInput;
};


export type MutationCreatePaymentMethodArgs = {
  payload: PaymentMethodInput;
};

export type PaymentIntentInput = {
  amount: Scalars['Int'];
  currency: Scalars['String'];
  paymentMethod: Scalars['String'];
};

export type PaymentIntentResponse = {
  __typename?: 'PaymentIntentResponse';
  data: DataResponsePi;
};

export type PaymentMethodInput = {
  type: Scalars['String'];
  cardNumber: Scalars['String'];
  expMonth: Scalars['Int'];
  expYear: Scalars['Int'];
  cvc: Scalars['String'];
};

export type PaymentMethodResponse = {
  __typename?: 'PaymentMethodResponse';
  data: DataResponsePm;
};

export type Query = {
  __typename?: 'Query';
  catsList: Array<Cat>;
};

export type CreatePaymentMethodMutationVariables = Exact<{
  payload: PaymentMethodInput;
}>;


export type CreatePaymentMethodMutation = { __typename?: 'Mutation', createPaymentMethod: Maybe<{ __typename?: 'PaymentMethodResponse', data: { __typename?: 'DataResponsePM', methodId: string } }> };

export type CreatePaymentIntentMutationVariables = Exact<{
  payload: PaymentIntentInput;
}>;


export type CreatePaymentIntentMutation = { __typename?: 'Mutation', createPaymentIntent: Maybe<{ __typename?: 'PaymentIntentResponse', data: { __typename?: 'DataResponsePI', clientSecret: string } }> };

export type GetCatListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCatListQuery = { __typename?: 'Query', catsList: Array<{ __typename?: 'Cat', id: number, name: string, picture: string, description: string, displayPrice: string, chargePrice: number }> };


export const CreatePaymentMethodDocument = gql`
    mutation CreatePaymentMethod($payload: PaymentMethodInput!) {
  createPaymentMethod(payload: $payload) {
    data {
      methodId
    }
  }
}
    `;
export type CreatePaymentMethodMutationFn = Apollo.MutationFunction<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;

/**
 * __useCreatePaymentMethodMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMethodMutation, { data, loading, error }] = useCreatePaymentMethodMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreatePaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>(CreatePaymentMethodDocument, options);
      }
export type CreatePaymentMethodMutationHookResult = ReturnType<typeof useCreatePaymentMethodMutation>;
export type CreatePaymentMethodMutationResult = Apollo.MutationResult<CreatePaymentMethodMutation>;
export type CreatePaymentMethodMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMethodMutation, CreatePaymentMethodMutationVariables>;
export const CreatePaymentIntentDocument = gql`
    mutation CreatePaymentIntent($payload: PaymentIntentInput!) {
  createPaymentIntent(payload: $payload) {
    data {
      clientSecret
    }
  }
}
    `;
export type CreatePaymentIntentMutationFn = Apollo.MutationFunction<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;

/**
 * __useCreatePaymentIntentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentIntentMutation, { data, loading, error }] = useCreatePaymentIntentMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreatePaymentIntentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>(CreatePaymentIntentDocument, options);
      }
export type CreatePaymentIntentMutationHookResult = ReturnType<typeof useCreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationResult = Apollo.MutationResult<CreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;
export const GetCatListDocument = gql`
    query getCatList {
  catsList {
    id
    name
    picture
    description
    displayPrice
    chargePrice
  }
}
    `;

/**
 * __useGetCatListQuery__
 *
 * To run a query within a React component, call `useGetCatListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCatListQuery(baseOptions?: Apollo.QueryHookOptions<GetCatListQuery, GetCatListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCatListQuery, GetCatListQueryVariables>(GetCatListDocument, options);
      }
export function useGetCatListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatListQuery, GetCatListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCatListQuery, GetCatListQueryVariables>(GetCatListDocument, options);
        }
export type GetCatListQueryHookResult = ReturnType<typeof useGetCatListQuery>;
export type GetCatListLazyQueryHookResult = ReturnType<typeof useGetCatListLazyQuery>;
export type GetCatListQueryResult = Apollo.QueryResult<GetCatListQuery, GetCatListQueryVariables>;