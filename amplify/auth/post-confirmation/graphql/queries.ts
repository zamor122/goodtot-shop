/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    categoryId
    createdAt
    id
    name
    subcategories {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const getConversation = /* GraphQL */ `query GetConversation($id: ID!) {
  getConversation(id: $id) {
    createdAt
    enquirer {
      createdAt
      email
      emailNotifications
      emailVerified
      id
      languagePreference
      lastLogin
      latitude
      longitude
      meetupRadius
      name
      notificationPreference
      phone
      phoneVerified
      picture
      plan
      rating
      smsNotifications
      status
      updatedAt
      userId
      username
      zipCode
      __typename
    }
    enquirerId
    id
    lastMessageAt
    listing {
      category
      createdAt
      deliveryRadius
      description
      id
      images
      isFeatured
      latitude
      locationDisplayName
      longitude
      meetupRadius
      price
      rating
      status
      title
      updatedAt
      userId
      zipCode
      __typename
    }
    listingId
    messages {
      nextToken
      __typename
    }
    seller {
      createdAt
      email
      emailNotifications
      emailVerified
      id
      languagePreference
      lastLogin
      latitude
      longitude
      meetupRadius
      name
      notificationPreference
      phone
      phoneVerified
      picture
      plan
      rating
      smsNotifications
      status
      updatedAt
      userId
      username
      zipCode
      __typename
    }
    sellerId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConversationQueryVariables,
  APITypes.GetConversationQuery
>;
export const getListing = /* GraphQL */ `query GetListing($id: ID!) {
  getListing(id: $id) {
    category
    conversations {
      nextToken
      __typename
    }
    createdAt
    deliveryRadius
    description
    id
    images
    isFeatured
    latitude
    locationDisplayName
    longitude
    meetupRadius
    price
    rating
    status
    title
    transaction {
      amount
      buyerId
      comments
      completedAt
      createdAt
      id
      listingId
      paymentMethod
      sellerId
      status
      updatedAt
      __typename
    }
    updatedAt
    user {
      createdAt
      email
      emailNotifications
      emailVerified
      id
      languagePreference
      lastLogin
      latitude
      longitude
      meetupRadius
      name
      notificationPreference
      phone
      phoneVerified
      picture
      plan
      rating
      smsNotifications
      status
      updatedAt
      userId
      username
      zipCode
      __typename
    }
    userId
    zipCode
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetListingQueryVariables,
  APITypes.GetListingQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    content
    conversation {
      createdAt
      enquirerId
      id
      lastMessageAt
      listingId
      sellerId
      updatedAt
      __typename
    }
    conversationId
    createdAt
    id
    isRead
    recipient {
      createdAt
      email
      emailNotifications
      emailVerified
      id
      languagePreference
      lastLogin
      latitude
      longitude
      meetupRadius
      name
      notificationPreference
      phone
      phoneVerified
      picture
      plan
      rating
      smsNotifications
      status
      updatedAt
      userId
      username
      zipCode
      __typename
    }
    recipientId
    sender {
      createdAt
      email
      emailNotifications
      emailVerified
      id
      languagePreference
      lastLogin
      latitude
      longitude
      meetupRadius
      name
      notificationPreference
      phone
      phoneVerified
      picture
      plan
      rating
      smsNotifications
      status
      updatedAt
      userId
      username
      zipCode
      __typename
    }
    senderId
    sentAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const getSubcategory = /* GraphQL */ `query GetSubcategory($id: ID!) {
  getSubcategory(id: $id) {
    category {
      categoryId
      createdAt
      id
      name
      updatedAt
      __typename
    }
    categoryId
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSubcategoryQueryVariables,
  APITypes.GetSubcategoryQuery
>;
export const getTransaction = /* GraphQL */ `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
    amount
    buyer {
      createdAt
      email
      emailNotifications
      emailVerified
      id
      languagePreference
      lastLogin
      latitude
      longitude
      meetupRadius
      name
      notificationPreference
      phone
      phoneVerified
      picture
      plan
      rating
      smsNotifications
      status
      updatedAt
      userId
      username
      zipCode
      __typename
    }
    buyerId
    comments
    completedAt
    createdAt
    id
    listing {
      category
      createdAt
      deliveryRadius
      description
      id
      images
      isFeatured
      latitude
      locationDisplayName
      longitude
      meetupRadius
      price
      rating
      status
      title
      updatedAt
      userId
      zipCode
      __typename
    }
    listingId
    paymentMethod
    seller {
      createdAt
      email
      emailNotifications
      emailVerified
      id
      languagePreference
      lastLogin
      latitude
      longitude
      meetupRadius
      name
      notificationPreference
      phone
      phoneVerified
      picture
      plan
      rating
      smsNotifications
      status
      updatedAt
      userId
      username
      zipCode
      __typename
    }
    sellerId
    status
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTransactionQueryVariables,
  APITypes.GetTransactionQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    buyer {
      nextToken
      __typename
    }
    conversationsAsEnquirer {
      nextToken
      __typename
    }
    conversationsAsSeller {
      nextToken
      __typename
    }
    createdAt
    email
    emailNotifications
    emailVerified
    id
    languagePreference
    lastLogin
    latitude
    listings {
      nextToken
      __typename
    }
    longitude
    meetupRadius
    messagesReceived {
      nextToken
      __typename
    }
    messagesSent {
      nextToken
      __typename
    }
    name
    notificationPreference
    phone
    phoneVerified
    picture
    plan
    rating
    seller {
      nextToken
      __typename
    }
    smsNotifications
    status
    updatedAt
    userId
    username
    zipCode
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      categoryId
      createdAt
      id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const listConversationByListingId = /* GraphQL */ `query ListConversationByListingId(
  $filter: ModelConversationFilterInput
  $limit: Int
  $listingId: ID!
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listConversationByListingId(
    filter: $filter
    limit: $limit
    listingId: $listingId
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      enquirerId
      id
      lastMessageAt
      listingId
      sellerId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConversationByListingIdQueryVariables,
  APITypes.ListConversationByListingIdQuery
>;
export const listConversations = /* GraphQL */ `query ListConversations(
  $filter: ModelConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      enquirerId
      id
      lastMessageAt
      listingId
      sellerId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConversationsQueryVariables,
  APITypes.ListConversationsQuery
>;
export const listListings = /* GraphQL */ `query ListListings(
  $filter: ModelListingFilterInput
  $limit: Int
  $nextToken: String
) {
  listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      category
      createdAt
      deliveryRadius
      description
      id
      images
      isFeatured
      latitude
      locationDisplayName
      longitude
      meetupRadius
      price
      rating
      status
      title
      updatedAt
      userId
      zipCode
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListListingsQueryVariables,
  APITypes.ListListingsQuery
>;
export const listMessageByConversationId = /* GraphQL */ `query ListMessageByConversationId(
  $conversationId: ID!
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMessageByConversationId(
    conversationId: $conversationId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      content
      conversationId
      createdAt
      id
      isRead
      recipientId
      senderId
      sentAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessageByConversationIdQueryVariables,
  APITypes.ListMessageByConversationIdQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      conversationId
      createdAt
      id
      isRead
      recipientId
      senderId
      sentAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const listSubcategories = /* GraphQL */ `query ListSubcategories(
  $filter: ModelSubcategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubcategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      categoryId
      createdAt
      id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubcategoriesQueryVariables,
  APITypes.ListSubcategoriesQuery
>;
export const listTransactionByBuyerId = /* GraphQL */ `query ListTransactionByBuyerId(
  $buyerId: ID!
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTransactionByBuyerId(
    buyerId: $buyerId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      amount
      buyerId
      comments
      completedAt
      createdAt
      id
      listingId
      paymentMethod
      sellerId
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionByBuyerIdQueryVariables,
  APITypes.ListTransactionByBuyerIdQuery
>;
export const listTransactionByListingId = /* GraphQL */ `query ListTransactionByListingId(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $listingId: ID!
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTransactionByListingId(
    filter: $filter
    limit: $limit
    listingId: $listingId
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      amount
      buyerId
      comments
      completedAt
      createdAt
      id
      listingId
      paymentMethod
      sellerId
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionByListingIdQueryVariables,
  APITypes.ListTransactionByListingIdQuery
>;
export const listTransactionBySellerId = /* GraphQL */ `query ListTransactionBySellerId(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
  $sellerId: ID!
  $sortDirection: ModelSortDirection
) {
  listTransactionBySellerId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sellerId: $sellerId
    sortDirection: $sortDirection
  ) {
    items {
      amount
      buyerId
      comments
      completedAt
      createdAt
      id
      listingId
      paymentMethod
      sellerId
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionBySellerIdQueryVariables,
  APITypes.ListTransactionBySellerIdQuery
>;
export const listTransactions = /* GraphQL */ `query ListTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      amount
      buyerId
      comments
      completedAt
      createdAt
      id
      listingId
      paymentMethod
      sellerId
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionsQueryVariables,
  APITypes.ListTransactionsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      email
      emailNotifications
      emailVerified
      id
      languagePreference
      lastLogin
      latitude
      longitude
      meetupRadius
      name
      notificationPreference
      phone
      phoneVerified
      picture
      plan
      rating
      smsNotifications
      status
      updatedAt
      userId
      username
      zipCode
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
