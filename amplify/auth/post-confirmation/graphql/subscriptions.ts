/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onCreateConversation = /* GraphQL */ `subscription OnCreateConversation(
  $filter: ModelSubscriptionConversationFilterInput
) {
  onCreateConversation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConversationSubscriptionVariables,
  APITypes.OnCreateConversationSubscription
>;
export const onCreateListing = /* GraphQL */ `subscription OnCreateListing($filter: ModelSubscriptionListingFilterInput) {
  onCreateListing(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateListingSubscriptionVariables,
  APITypes.OnCreateListingSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onCreateSubcategory = /* GraphQL */ `subscription OnCreateSubcategory(
  $filter: ModelSubscriptionSubcategoryFilterInput
) {
  onCreateSubcategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubcategorySubscriptionVariables,
  APITypes.OnCreateSubcategorySubscription
>;
export const onCreateTransaction = /* GraphQL */ `subscription OnCreateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onCreateTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTransactionSubscriptionVariables,
  APITypes.OnCreateTransactionSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onDeleteConversation = /* GraphQL */ `subscription OnDeleteConversation(
  $filter: ModelSubscriptionConversationFilterInput
) {
  onDeleteConversation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConversationSubscriptionVariables,
  APITypes.OnDeleteConversationSubscription
>;
export const onDeleteListing = /* GraphQL */ `subscription OnDeleteListing($filter: ModelSubscriptionListingFilterInput) {
  onDeleteListing(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteListingSubscriptionVariables,
  APITypes.OnDeleteListingSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onDeleteSubcategory = /* GraphQL */ `subscription OnDeleteSubcategory(
  $filter: ModelSubscriptionSubcategoryFilterInput
) {
  onDeleteSubcategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubcategorySubscriptionVariables,
  APITypes.OnDeleteSubcategorySubscription
>;
export const onDeleteTransaction = /* GraphQL */ `subscription OnDeleteTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onDeleteTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTransactionSubscriptionVariables,
  APITypes.OnDeleteTransactionSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onUpdateConversation = /* GraphQL */ `subscription OnUpdateConversation(
  $filter: ModelSubscriptionConversationFilterInput
) {
  onUpdateConversation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConversationSubscriptionVariables,
  APITypes.OnUpdateConversationSubscription
>;
export const onUpdateListing = /* GraphQL */ `subscription OnUpdateListing($filter: ModelSubscriptionListingFilterInput) {
  onUpdateListing(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateListingSubscriptionVariables,
  APITypes.OnUpdateListingSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onUpdateSubcategory = /* GraphQL */ `subscription OnUpdateSubcategory(
  $filter: ModelSubscriptionSubcategoryFilterInput
) {
  onUpdateSubcategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubcategorySubscriptionVariables,
  APITypes.OnUpdateSubcategorySubscription
>;
export const onUpdateTransaction = /* GraphQL */ `subscription OnUpdateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onUpdateTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTransactionSubscriptionVariables,
  APITypes.OnUpdateTransactionSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
