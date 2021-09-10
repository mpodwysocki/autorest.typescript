/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Domains } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClientContext } from "../graphRbacManagementClientContext";
import {
  Domain,
  DomainsListOptionalParams,
  DomainsListResponse,
  DomainsGetOptionalParams,
  DomainsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Domains operations. */
export class DomainsImpl implements Domains {
  private readonly client: GraphRbacManagementClientContext;

  /**
   * Initialize a new instance of the class Domains class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of domains for the current tenant.
   * @param options The options parameters.
   */
  public list(
    options?: DomainsListOptionalParams
  ): PagedAsyncIterableIterator<Domain> {
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
    options?: DomainsListOptionalParams
  ): AsyncIterableIterator<Domain[]> {
    let result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: DomainsListOptionalParams
  ): AsyncIterableIterator<Domain> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of domains for the current tenant.
   * @param options The options parameters.
   */
  private _list(
    options?: DomainsListOptionalParams
  ): Promise<DomainsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a specific domain in the current tenant.
   * @param domainName name of the domain.
   * @param options The options parameters.
   */
  get(
    domainName: string,
    options?: DomainsGetOptionalParams
  ): Promise<DomainsGetResponse> {
    return this.client.sendOperationRequest(
      { domainName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/domains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/domains/{domainName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.domainName],
  headerParameters: [Parameters.accept],
  serializer
};
