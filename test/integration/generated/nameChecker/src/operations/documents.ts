import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SearchClientContext } from "../searchClientContext";
import {
  DocumentsCountOptionalParams,
  DocumentsCountResponse,
  DocumentsSearchGetOptionalParams,
  DocumentsSearchGetResponse,
  SearchRequest,
  DocumentsSearchPostOptionalParams,
  DocumentsSearchPostResponse,
  DocumentsGetOptionalParams,
  DocumentsGetResponse,
  DocumentsSuggestGetOptionalParams,
  DocumentsSuggestGetResponse,
  SuggestRequest,
  DocumentsSuggestPostOptionalParams,
  DocumentsSuggestPostResponse,
  IndexBatch,
  DocumentsIndexOptionalParams,
  DocumentsIndexResponse,
  DocumentsAutocompleteGetOptionalParams,
  DocumentsAutocompleteGetResponse,
  AutocompleteRequest,
  DocumentsAutocompletePostOptionalParams,
  DocumentsAutocompletePostResponse
} from "../models";

/** Class representing a Documents. */
export class Documents {
  private readonly client: SearchClientContext;

  /**
   * Initialize a new instance of the class Documents class.
   * @param client Reference to the service client
   */
  constructor(client: SearchClientContext) {
    this.client = client;
  }

  /**
   * Queries the number of documents in the index.
   * @param options The options parameters.
   */
  count(
    options?: DocumentsCountOptionalParams
  ): Promise<DocumentsCountResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      countOperationSpec
    ) as Promise<DocumentsCountResponse>;
  }

  /**
   * Searches for documents in the index.
   * @param options The options parameters.
   */
  searchGet(
    options?: DocumentsSearchGetOptionalParams
  ): Promise<DocumentsSearchGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      searchGetOperationSpec
    ) as Promise<DocumentsSearchGetResponse>;
  }

  /**
   * Searches for documents in the index.
   * @param searchRequest The definition of the Search request.
   * @param options The options parameters.
   */
  searchPost(
    searchRequest: SearchRequest,
    options?: DocumentsSearchPostOptionalParams
  ): Promise<DocumentsSearchPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      searchRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      searchPostOperationSpec
    ) as Promise<DocumentsSearchPostResponse>;
  }

  /**
   * Retrieves a document from the index.
   * @param key The key of the document to retrieve.
   * @param options The options parameters.
   */
  get(
    key: string,
    options?: DocumentsGetOptionalParams
  ): Promise<DocumentsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      key,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<DocumentsGetResponse>;
  }

  /**
   * Suggests documents in the index that match the given partial query text.
   * @param suggesterName The name of the suggester as specified in the suggesters collection that's part
   *                      of the index definition.
   * @param search$DONotNormalize$Text The search text to use to suggest documents. Must be at least 1
   *                                   character, and no more than 100 characters.
   * @param options The options parameters.
   */
  suggestGet(
    suggesterName: string,
    search$DONotNormalize$Text: string,
    options?: DocumentsSuggestGetOptionalParams
  ): Promise<DocumentsSuggestGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      suggesterName,
      search$DONotNormalize$Text,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      suggestGetOperationSpec
    ) as Promise<DocumentsSuggestGetResponse>;
  }

  /**
   * Suggests documents in the index that match the given partial query text.
   * @param suggestRequest The Suggest request.
   * @param options The options parameters.
   */
  suggestPost(
    suggestRequest: SuggestRequest,
    options?: DocumentsSuggestPostOptionalParams
  ): Promise<DocumentsSuggestPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      suggestRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      suggestPostOperationSpec
    ) as Promise<DocumentsSuggestPostResponse>;
  }

  /**
   * Sends a batch of document write actions to the index.
   * @param batch The batch of index actions.
   * @param options The options parameters.
   */
  index(
    batch: IndexBatch,
    options?: DocumentsIndexOptionalParams
  ): Promise<DocumentsIndexResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      batch,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      indexOperationSpec
    ) as Promise<DocumentsIndexResponse>;
  }

  /**
   * Autocompletes incomplete query terms based on input text and matching terms in the index.
   * @param suggesterName The name of the suggester as specified in the suggesters collection that's part
   *                      of the index definition.
   * @param search$DONotNormalize$Text The incomplete term which should be auto-completed.
   * @param options The options parameters.
   */
  autocompleteGet(
    suggesterName: string,
    search$DONotNormalize$Text: string,
    options?: DocumentsAutocompleteGetOptionalParams
  ): Promise<DocumentsAutocompleteGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      suggesterName,
      search$DONotNormalize$Text,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      autocompleteGetOperationSpec
    ) as Promise<DocumentsAutocompleteGetResponse>;
  }

  /**
   * Autocompletes incomplete query terms based on input text and matching terms in the index.
   * @param autocompleteRequest The definition of the Autocomplete request.
   * @param options The options parameters.
   */
  autocompletePost(
    autocompleteRequest: AutocompleteRequest,
    options?: DocumentsAutocompletePostOptionalParams
  ): Promise<DocumentsAutocompletePostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      autocompleteRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      autocompletePostOperationSpec
    ) as Promise<DocumentsAutocompletePostResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const countOperationSpec: coreHttp.OperationSpec = {
  path: "/docs/$count",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const searchGetOperationSpec: coreHttp.OperationSpec = {
  path: "/docs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SearchDocumentsResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.searchText,
    Parameters.includeTotalResultCount,
    Parameters.facets,
    Parameters.filter,
    Parameters.highlightFields,
    Parameters.highlightPostTag,
    Parameters.highlightPreTag,
    Parameters.minimumCoverage,
    Parameters.orderBy,
    Parameters.queryType,
    Parameters.scoringParameters,
    Parameters.scoringProfile,
    Parameters.searchFields,
    Parameters.searchMode,
    Parameters.scoringStatistics,
    Parameters.sessionId,
    Parameters.select,
    Parameters.skip,
    Parameters.top
  ],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const searchPostOperationSpec: coreHttp.OperationSpec = {
  path: "/docs/search.post.search",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SearchDocumentsResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.searchRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [
    Parameters.accept,
    Parameters.xMsClientRequestId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/docs('{key}')",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.selectedFields],
  urlParameters: [Parameters.endpoint, Parameters.indexName, Parameters.key],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const suggestGetOperationSpec: coreHttp.OperationSpec = {
  path: "/docs/search.suggest",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SuggestDocumentsResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.search$DONotNormalize$Text,
    Parameters.suggesterName,
    Parameters.filter1,
    Parameters.useFuzzyMatching,
    Parameters.highlightPostTag1,
    Parameters.highlightPreTag1,
    Parameters.minimumCoverage1,
    Parameters.orderBy1,
    Parameters.searchFields1,
    Parameters.select1,
    Parameters.top1
  ],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const suggestPostOperationSpec: coreHttp.OperationSpec = {
  path: "/docs/search.post.suggest",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SuggestDocumentsResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.suggestRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [
    Parameters.accept,
    Parameters.xMsClientRequestId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const indexOperationSpec: coreHttp.OperationSpec = {
  path: "/docs/search.index",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IndexDocumentsResult
    },
    207: {
      bodyMapper: Mappers.IndexDocumentsResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.batch,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [
    Parameters.accept,
    Parameters.xMsClientRequestId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const autocompleteGetOperationSpec: coreHttp.OperationSpec = {
  path: "/docs/search.autocomplete",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutocompleteResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.search$DONotNormalize$Text,
    Parameters.suggesterName,
    Parameters.autocompleteMode,
    Parameters.filter2,
    Parameters.useFuzzyMatching1,
    Parameters.highlightPostTag2,
    Parameters.highlightPreTag2,
    Parameters.minimumCoverage2,
    Parameters.searchFields2,
    Parameters.top2
  ],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const autocompletePostOperationSpec: coreHttp.OperationSpec = {
  path: "/docs/search.post.autocomplete",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AutocompleteResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.autocompleteRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.indexName],
  headerParameters: [
    Parameters.accept,
    Parameters.xMsClientRequestId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
