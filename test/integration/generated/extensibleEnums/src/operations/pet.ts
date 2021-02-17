/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ExtensibleEnumsClientContext } from "../extensibleEnumsClientContext";
import {
  PetGetByPetIdResponse,
  PetAddPetOptionalParams,
  PetAddPetResponse
} from "../models";

/** Class representing a Pet. */
export class Pet {
  private readonly client: ExtensibleEnumsClientContext;

  /**
   * Initialize a new instance of the class Pet class.
   * @param client Reference to the service client
   */
  constructor(client: ExtensibleEnumsClientContext) {
    this.client = client;
  }

  /**
   * get pet by id
   * @param petId Pet id
   * @param options The options parameters.
   */
  getByPetId(
    petId: string,
    options?: coreHttp.OperationOptions
  ): Promise<PetGetByPetIdResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      petId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getByPetIdOperationSpec
    ) as Promise<PetGetByPetIdResponse>;
  }

  /**
   * add pet
   * @param options The options parameters.
   */
  addPet(options?: PetAddPetOptionalParams): Promise<PetAddPetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      addPetOperationSpec
    ) as Promise<PetAddPetResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getByPetIdOperationSpec: coreHttp.OperationSpec = {
  path: "/extensibleenums/pet/{petId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Pet
    }
  },
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.accept],
  serializer
};
const addPetOperationSpec: coreHttp.OperationSpec = {
  path: "/extensibleenums/pet/addPet",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Pet
    }
  },
  requestBody: Parameters.petParam,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
