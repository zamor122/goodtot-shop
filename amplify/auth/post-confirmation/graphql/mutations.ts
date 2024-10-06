/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $condition: ModelCategoryConditionInput
  $input: CreateCategoryInput!
) {
  createCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const createConversation = /* GraphQL */ `mutation CreateConversation(
  $condition: ModelConversationConditionInput
  $input: CreateConversationInput!
) {
  createConversation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateConversationMutationVariables,
  APITypes.CreateConversationMutation
>;
export const createListing = /* GraphQL */ `mutation CreateListing(
  $condition: ModelListingConditionInput
  $input: CreateListingInput!
) {
  createListing(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateListingMutationVariables,
  APITypes.CreateListingMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $condition: ModelMessageConditionInput
  $input: CreateMessageInput!
) {
  createMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const createSubcategory = /* GraphQL */ `mutation CreateSubcategory(
  $condition: ModelSubcategoryConditionInput
  $input: CreateSubcategoryInput!
) {
  createSubcategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateSubcategoryMutationVariables,
  APITypes.CreateSubcategoryMutation
>;
export const createTransaction = /* GraphQL */ `mutation CreateTransaction(
  $condition: ModelTransactionConditionInput
  $input: CreateTransactionInput!
) {
  createTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTransactionMutationVariables,
  APITypes.CreateTransactionMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $condition: ModelCategoryConditionInput
  $input: DeleteCategoryInput!
) {
  deleteCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const deleteConversation = /* GraphQL */ `mutation DeleteConversation(
  $condition: ModelConversationConditionInput
  $input: DeleteConversationInput!
) {
  deleteConversation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteConversationMutationVariables,
  APITypes.DeleteConversationMutation
>;
export const deleteListing = /* GraphQL */ `mutation DeleteListing(
  $condition: ModelListingConditionInput
  $input: DeleteListingInput!
) {
  deleteListing(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteListingMutationVariables,
  APITypes.DeleteListingMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $condition: ModelMessageConditionInput
  $input: DeleteMessageInput!
) {
  deleteMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const deleteSubcategory = /* GraphQL */ `mutation DeleteSubcategory(
  $condition: ModelSubcategoryConditionInput
  $input: DeleteSubcategoryInput!
) {
  deleteSubcategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteSubcategoryMutationVariables,
  APITypes.DeleteSubcategoryMutation
>;
export const deleteTransaction = /* GraphQL */ `mutation DeleteTransaction(
  $condition: ModelTransactionConditionInput
  $input: DeleteTransactionInput!
) {
  deleteTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTransactionMutationVariables,
  APITypes.DeleteTransactionMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $condition: ModelCategoryConditionInput
  $input: UpdateCategoryInput!
) {
  updateCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const updateConversation = /* GraphQL */ `mutation UpdateConversation(
  $condition: ModelConversationConditionInput
  $input: UpdateConversationInput!
) {
  updateConversation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateConversationMutationVariables,
  APITypes.UpdateConversationMutation
>;
export const updateListing = /* GraphQL */ `mutation UpdateListing(
  $condition: ModelListingConditionInput
  $input: UpdateListingInput!
) {
  updateListing(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateListingMutationVariables,
  APITypes.UpdateListingMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $condition: ModelMessageConditionInput
  $input: UpdateMessageInput!
) {
  updateMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const updateSubcategory = /* GraphQL */ `mutation UpdateSubcategory(
  $condition: ModelSubcategoryConditionInput
  $input: UpdateSubcategoryInput!
) {
  updateSubcategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateSubcategoryMutationVariables,
  APITypes.UpdateSubcategoryMutation
>;
export const updateTransaction = /* GraphQL */ `mutation UpdateTransaction(
  $condition: ModelTransactionConditionInput
  $input: UpdateTransactionInput!
) {
  updateTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTransactionMutationVariables,
  APITypes.UpdateTransactionMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
