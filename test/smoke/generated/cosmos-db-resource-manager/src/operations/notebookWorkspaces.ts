/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { NotebookWorkspaces } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  NotebookWorkspace,
  NotebookWorkspacesListByDatabaseAccountOptionalParams,
  NotebookWorkspacesListByDatabaseAccountResponse,
  NotebookWorkspaceName,
  NotebookWorkspacesGetOptionalParams,
  NotebookWorkspacesGetResponse,
  NotebookWorkspaceCreateUpdateParameters,
  NotebookWorkspacesCreateOrUpdateOptionalParams,
  NotebookWorkspacesCreateOrUpdateResponse,
  NotebookWorkspacesDeleteOptionalParams,
  NotebookWorkspacesListConnectionInfoOptionalParams,
  NotebookWorkspacesListConnectionInfoResponse,
  NotebookWorkspacesRegenerateAuthTokenOptionalParams,
  NotebookWorkspacesStartOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NotebookWorkspaces operations. */
export class NotebookWorkspacesImpl implements NotebookWorkspaces {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class NotebookWorkspaces class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the notebook workspace resources of an existing Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  public listByDatabaseAccount(
    resourceGroupName: string,
    accountName: string,
    options?: NotebookWorkspacesListByDatabaseAccountOptionalParams
  ): PagedAsyncIterableIterator<NotebookWorkspace> {
    const iter = this.listByDatabaseAccountPagingAll(
      resourceGroupName,
      accountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByDatabaseAccountPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listByDatabaseAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: NotebookWorkspacesListByDatabaseAccountOptionalParams
  ): AsyncIterableIterator<NotebookWorkspace[]> {
    let result = await this._listByDatabaseAccount(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
  }

  private async *listByDatabaseAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: NotebookWorkspacesListByDatabaseAccountOptionalParams
  ): AsyncIterableIterator<NotebookWorkspace> {
    for await (const page of this.listByDatabaseAccountPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the notebook workspace resources of an existing Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  private _listByDatabaseAccount(
    resourceGroupName: string,
    accountName: string,
    options?: NotebookWorkspacesListByDatabaseAccountOptionalParams
  ): Promise<NotebookWorkspacesListByDatabaseAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByDatabaseAccountOperationSpec
    );
  }

  /**
   * Gets the notebook workspace for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param notebookWorkspaceName The name of the notebook workspace resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    notebookWorkspaceName: NotebookWorkspaceName,
    options?: NotebookWorkspacesGetOptionalParams
  ): Promise<NotebookWorkspacesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, notebookWorkspaceName, options },
      getOperationSpec
    );
  }

  /**
   * Creates the notebook workspace for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param notebookWorkspaceName The name of the notebook workspace resource.
   * @param notebookCreateUpdateParameters The notebook workspace to create for the current database
   *                                       account.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    notebookWorkspaceName: NotebookWorkspaceName,
    notebookCreateUpdateParameters: NotebookWorkspaceCreateUpdateParameters,
    options?: NotebookWorkspacesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<NotebookWorkspacesCreateOrUpdateResponse>,
      NotebookWorkspacesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NotebookWorkspacesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        accountName,
        notebookWorkspaceName,
        notebookCreateUpdateParameters,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates the notebook workspace for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param notebookWorkspaceName The name of the notebook workspace resource.
   * @param notebookCreateUpdateParameters The notebook workspace to create for the current database
   *                                       account.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    notebookWorkspaceName: NotebookWorkspaceName,
    notebookCreateUpdateParameters: NotebookWorkspaceCreateUpdateParameters,
    options?: NotebookWorkspacesCreateOrUpdateOptionalParams
  ): Promise<NotebookWorkspacesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      accountName,
      notebookWorkspaceName,
      notebookCreateUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the notebook workspace for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param notebookWorkspaceName The name of the notebook workspace resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    notebookWorkspaceName: NotebookWorkspaceName,
    options?: NotebookWorkspacesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, accountName, notebookWorkspaceName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the notebook workspace for a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param notebookWorkspaceName The name of the notebook workspace resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    notebookWorkspaceName: NotebookWorkspaceName,
    options?: NotebookWorkspacesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      notebookWorkspaceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves the connection info for the notebook workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param notebookWorkspaceName The name of the notebook workspace resource.
   * @param options The options parameters.
   */
  listConnectionInfo(
    resourceGroupName: string,
    accountName: string,
    notebookWorkspaceName: NotebookWorkspaceName,
    options?: NotebookWorkspacesListConnectionInfoOptionalParams
  ): Promise<NotebookWorkspacesListConnectionInfoResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, notebookWorkspaceName, options },
      listConnectionInfoOperationSpec
    );
  }

  /**
   * Regenerates the auth token for the notebook workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param notebookWorkspaceName The name of the notebook workspace resource.
   * @param options The options parameters.
   */
  async beginRegenerateAuthToken(
    resourceGroupName: string,
    accountName: string,
    notebookWorkspaceName: NotebookWorkspaceName,
    options?: NotebookWorkspacesRegenerateAuthTokenOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, accountName, notebookWorkspaceName, options },
      regenerateAuthTokenOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Regenerates the auth token for the notebook workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param notebookWorkspaceName The name of the notebook workspace resource.
   * @param options The options parameters.
   */
  async beginRegenerateAuthTokenAndWait(
    resourceGroupName: string,
    accountName: string,
    notebookWorkspaceName: NotebookWorkspaceName,
    options?: NotebookWorkspacesRegenerateAuthTokenOptionalParams
  ): Promise<void> {
    const poller = await this.beginRegenerateAuthToken(
      resourceGroupName,
      accountName,
      notebookWorkspaceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Starts the notebook workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param notebookWorkspaceName The name of the notebook workspace resource.
   * @param options The options parameters.
   */
  async beginStart(
    resourceGroupName: string,
    accountName: string,
    notebookWorkspaceName: NotebookWorkspaceName,
    options?: NotebookWorkspacesStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, accountName, notebookWorkspaceName, options },
      startOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Starts the notebook workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param notebookWorkspaceName The name of the notebook workspace resource.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceGroupName: string,
    accountName: string,
    notebookWorkspaceName: NotebookWorkspaceName,
    options?: NotebookWorkspacesStartOptionalParams
  ): Promise<void> {
    const poller = await this.beginStart(
      resourceGroupName,
      accountName,
      notebookWorkspaceName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDatabaseAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NotebookWorkspaceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NotebookWorkspace
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.notebookWorkspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NotebookWorkspace
    },
    201: {
      bodyMapper: Mappers.NotebookWorkspace
    },
    202: {
      bodyMapper: Mappers.NotebookWorkspace
    },
    204: {
      bodyMapper: Mappers.NotebookWorkspace
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.notebookCreateUpdateParameters,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.notebookWorkspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.notebookWorkspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listConnectionInfoOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}/listConnectionInfo",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NotebookWorkspaceConnectionInfoResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.notebookWorkspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateAuthTokenOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}/regenerateAuthToken",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.notebookWorkspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const startOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}/start",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.notebookWorkspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
