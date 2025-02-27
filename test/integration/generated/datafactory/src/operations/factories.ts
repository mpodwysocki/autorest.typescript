import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Factories } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClient } from "../dataFactoryClient";
import {
  Factory,
  FactoriesListNextOptionalParams,
  FactoriesListOptionalParams,
  FactoriesListByResourceGroupNextOptionalParams,
  FactoriesListByResourceGroupOptionalParams,
  FactoriesListResponse,
  FactoryRepoUpdate,
  FactoriesConfigureFactoryRepoOptionalParams,
  FactoriesConfigureFactoryRepoResponse,
  FactoriesListByResourceGroupResponse,
  FactoriesCreateOrUpdateOptionalParams,
  FactoriesCreateOrUpdateResponse,
  FactoryUpdateParameters,
  FactoriesUpdateOptionalParams,
  FactoriesUpdateResponse,
  FactoriesGetOptionalParams,
  FactoriesGetResponse,
  FactoriesDeleteOptionalParams,
  GitHubAccessTokenRequest,
  FactoriesGetGitHubAccessTokenOptionalParams,
  FactoriesGetGitHubAccessTokenResponse,
  UserAccessPolicy,
  FactoriesGetDataPlaneAccessOptionalParams,
  FactoriesGetDataPlaneAccessResponse,
  FactoriesListNextResponse,
  FactoriesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Factories operations. */
export class FactoriesImpl implements Factories {
  private readonly client: DataFactoryClient;

  /**
   * Initialize a new instance of the class Factories class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClient) {
    this.client = client;
  }

  /**
   * Lists factories under the specified subscription.
   * @param options The options parameters.
   */
  public list(
    options?: FactoriesListOptionalParams
  ): PagedAsyncIterableIterator<Factory> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: FactoriesListOptionalParams
  ): AsyncIterableIterator<Factory[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: FactoriesListOptionalParams
  ): AsyncIterableIterator<Factory> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists factories.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: FactoriesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Factory> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: FactoriesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Factory[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: FactoriesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Factory> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists factories under the specified subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: FactoriesListOptionalParams
  ): Promise<FactoriesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Updates a factory's repo information.
   * @param locationId The location identifier.
   * @param factoryRepoUpdate Update factory repo request definition.
   * @param options The options parameters.
   */
  configureFactoryRepo(
    locationId: string,
    factoryRepoUpdate: FactoryRepoUpdate,
    options?: FactoriesConfigureFactoryRepoOptionalParams
  ): Promise<FactoriesConfigureFactoryRepoResponse> {
    return this.client.sendOperationRequest(
      { locationId, factoryRepoUpdate, options },
      configureFactoryRepoOperationSpec
    );
  }

  /**
   * Lists factories.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: FactoriesListByResourceGroupOptionalParams
  ): Promise<FactoriesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Creates or updates a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param factory Factory resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    factory: Factory,
    options?: FactoriesCreateOrUpdateOptionalParams
  ): Promise<FactoriesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, factory, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param factoryUpdateParameters The parameters for updating a factory.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    factoryName: string,
    factoryUpdateParameters: FactoryUpdateParameters,
    options?: FactoriesUpdateOptionalParams
  ): Promise<FactoriesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, factoryUpdateParameters, options },
      updateOperationSpec
    );
  }

  /**
   * Gets a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    options?: FactoriesGetOptionalParams
  ): Promise<FactoriesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    options?: FactoriesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      deleteOperationSpec
    );
  }

  /**
   * Get GitHub Access Token.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param gitHubAccessTokenRequest Get GitHub access token request definition.
   * @param options The options parameters.
   */
  getGitHubAccessToken(
    resourceGroupName: string,
    factoryName: string,
    gitHubAccessTokenRequest: GitHubAccessTokenRequest,
    options?: FactoriesGetGitHubAccessTokenOptionalParams
  ): Promise<FactoriesGetGitHubAccessTokenResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, gitHubAccessTokenRequest, options },
      getGitHubAccessTokenOperationSpec
    );
  }

  /**
   * Get Data Plane access.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param policy Data Plane user access policy definition.
   * @param options The options parameters.
   */
  getDataPlaneAccess(
    resourceGroupName: string,
    factoryName: string,
    policy: UserAccessPolicy,
    options?: FactoriesGetDataPlaneAccessOptionalParams
  ): Promise<FactoriesGetDataPlaneAccessResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, policy, options },
      getDataPlaneAccessOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: FactoriesListNextOptionalParams
  ): Promise<FactoriesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group name.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: FactoriesListByResourceGroupNextOptionalParams
  ): Promise<FactoriesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/factories",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FactoryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const configureFactoryRepoOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/locations/{locationId}/configureFactoryRepo",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Factory
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.factoryRepoUpdate,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FactoryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Factory
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.factory,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Factory
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.factoryUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Factory
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getGitHubAccessTokenOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getGitHubAccessToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubAccessTokenResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.gitHubAccessTokenRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDataPlaneAccessOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getDataPlaneAccess",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.policy,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FactoryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FactoryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
