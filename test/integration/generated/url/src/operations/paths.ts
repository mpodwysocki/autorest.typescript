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
import { UrlClientContext } from "../urlClientContext";
import { UriColor } from "../models";

/** Class representing a Paths. */
export class Paths {
  private readonly client: UrlClientContext;

  /**
   * Initialize a new instance of the class Paths class.
   * @param client Reference to the service client
   */
  constructor(client: UrlClientContext) {
    this.client = client;
  }

  /**
   * Get true Boolean value on path
   * @param options The options parameters.
   */
  getBooleanTrue(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getBooleanTrueOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get false Boolean value on path
   * @param options The options parameters.
   */
  getBooleanFalse(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getBooleanFalseOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '1000000' integer value
   * @param options The options parameters.
   */
  getIntOneMillion(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getIntOneMillionOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '-1000000' integer value
   * @param options The options parameters.
   */
  getIntNegativeOneMillion(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getIntNegativeOneMillionOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '10000000000' 64 bit integer value
   * @param options The options parameters.
   */
  getTenBillion(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getTenBillionOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '-10000000000' 64 bit integer value
   * @param options The options parameters.
   */
  getNegativeTenBillion(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getNegativeTenBillionOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '1.034E+20' numeric value
   * @param options The options parameters.
   */
  floatScientificPositive(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      floatScientificPositiveOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '-1.034E-20' numeric value
   * @param options The options parameters.
   */
  floatScientificNegative(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      floatScientificNegativeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '9999999.999' numeric value
   * @param options The options parameters.
   */
  doubleDecimalPositive(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      doubleDecimalPositiveOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '-9999999.999' numeric value
   * @param options The options parameters.
   */
  doubleDecimalNegative(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      doubleDecimalNegativeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value
   * @param options The options parameters.
   */
  stringUnicode(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      stringUnicodeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get 'begin!*'();:@ &=+$,/?#[]end
   * @param options The options parameters.
   */
  stringUrlEncoded(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      stringUrlEncodedOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * https://tools.ietf.org/html/rfc3986#appendix-A 'path' accept any 'pchar' not encoded
   * @param options The options parameters.
   */
  stringUrlNonEncoded(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      stringUrlNonEncodedOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get ''
   * @param options The options parameters.
   */
  stringEmpty(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      stringEmptyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null (should throw)
   * @param stringPath null string value
   * @param options The options parameters.
   */
  stringNull(
    stringPath: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      stringPath,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      stringNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get using uri with 'green color' in path parameter
   * @param enumPath send the value green
   * @param options The options parameters.
   */
  enumValid(
    enumPath: UriColor,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      enumPath,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      enumValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null (should throw on the client before the request is sent on wire)
   * @param enumPath send null should throw
   * @param options The options parameters.
   */
  enumNull(
    enumPath: UriColor,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      enumPath,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      enumNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param bytePath '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param options The options parameters.
   */
  byteMultiByte(
    bytePath: Uint8Array,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      bytePath,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      byteMultiByteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '' as byte array
   * @param options The options parameters.
   */
  byteEmpty(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      byteEmptyOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null as byte array (should throw)
   * @param bytePath null as byte array (should throw)
   * @param options The options parameters.
   */
  byteNull(
    bytePath: Uint8Array,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      bytePath,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      byteNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '2012-01-01' as date
   * @param options The options parameters.
   */
  dateValid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      dateValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null as date - this should throw or be unusable on the client side, depending on date
   * representation
   * @param datePath null as date (should throw)
   * @param options The options parameters.
   */
  dateNull(
    datePath: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      datePath,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      dateNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get '2012-01-01T01:01:01Z' as date-time
   * @param options The options parameters.
   */
  dateTimeValid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      dateTimeValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get null as date-time, should be disallowed or throw depending on representation of date-time
   * @param dateTimePath null as date-time
   * @param options The options parameters.
   */
  dateTimeNull(
    dateTimePath: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      dateTimePath,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      dateTimeNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get 'lorem' encoded value as 'bG9yZW0' (base64url)
   * @param base64UrlPath base64url encoded value
   * @param options The options parameters.
   */
  base64Url(
    base64UrlPath: Uint8Array,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      base64UrlPath,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      base64UrlOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the csv-array
   * format
   * @param arrayPath an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using
   *                  the csv-array format
   * @param options The options parameters.
   */
  arrayCsvInPath(
    arrayPath: string[],
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      arrayPath,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      arrayCsvInPathOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get the date 2016-04-13 encoded value as '1460505600' (Unix time)
   * @param unixTimeUrlPath Unix time encoded value
   * @param options The options parameters.
   */
  unixTimeUrl(
    unixTimeUrlPath: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      unixTimeUrlPath,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      unixTimeUrlOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getBooleanTrueOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/bool/true/{boolPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.boolPath],
  headerParameters: [Parameters.accept],
  serializer
};
const getBooleanFalseOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/bool/false/{boolPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.boolPath1],
  headerParameters: [Parameters.accept],
  serializer
};
const getIntOneMillionOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/int/1000000/{intPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.intPath],
  headerParameters: [Parameters.accept],
  serializer
};
const getIntNegativeOneMillionOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/int/-1000000/{intPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.intPath1],
  headerParameters: [Parameters.accept],
  serializer
};
const getTenBillionOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/long/10000000000/{longPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.longPath],
  headerParameters: [Parameters.accept],
  serializer
};
const getNegativeTenBillionOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/long/-10000000000/{longPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.longPath1],
  headerParameters: [Parameters.accept],
  serializer
};
const floatScientificPositiveOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/float/1.034E+20/{floatPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.floatPath],
  headerParameters: [Parameters.accept],
  serializer
};
const floatScientificNegativeOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/float/-1.034E-20/{floatPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.floatPath1],
  headerParameters: [Parameters.accept],
  serializer
};
const doubleDecimalPositiveOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/double/9999999.999/{doublePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.doublePath],
  headerParameters: [Parameters.accept],
  serializer
};
const doubleDecimalNegativeOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/double/-9999999.999/{doublePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.doublePath1],
  headerParameters: [Parameters.accept],
  serializer
};
const stringUnicodeOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/string/unicode/{stringPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.stringPath],
  headerParameters: [Parameters.accept],
  serializer
};
const stringUrlEncodedOperationSpec: coreHttp.OperationSpec = {
  path:
    "/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.stringPath1],
  headerParameters: [Parameters.accept],
  serializer
};
const stringUrlNonEncodedOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/string/begin!*'();:@&=+$,end/{stringPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.stringPath2],
  headerParameters: [Parameters.accept],
  serializer
};
const stringEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/string/empty/{stringPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.stringPath3],
  headerParameters: [Parameters.accept],
  serializer
};
const stringNullOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/string/null/{stringPath}",
  httpMethod: "GET",
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.stringPath4],
  headerParameters: [Parameters.accept],
  serializer
};
const enumValidOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/enum/green%20color/{enumPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.enumPath],
  headerParameters: [Parameters.accept],
  serializer
};
const enumNullOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/string/null/{enumPath}",
  httpMethod: "GET",
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.enumPath],
  headerParameters: [Parameters.accept],
  serializer
};
const byteMultiByteOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/byte/multibyte/{bytePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.bytePath],
  headerParameters: [Parameters.accept],
  serializer
};
const byteEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/byte/empty/{bytePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.bytePath1],
  headerParameters: [Parameters.accept],
  serializer
};
const byteNullOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/byte/null/{bytePath}",
  httpMethod: "GET",
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.bytePath],
  headerParameters: [Parameters.accept],
  serializer
};
const dateValidOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/date/2012-01-01/{datePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.datePath],
  headerParameters: [Parameters.accept],
  serializer
};
const dateNullOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/date/null/{datePath}",
  httpMethod: "GET",
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.datePath1],
  headerParameters: [Parameters.accept],
  serializer
};
const dateTimeValidOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.dateTimePath],
  headerParameters: [Parameters.accept],
  serializer
};
const dateTimeNullOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/datetime/null/{dateTimePath}",
  httpMethod: "GET",
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.dateTimePath1],
  headerParameters: [Parameters.accept],
  serializer
};
const base64UrlOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/string/bG9yZW0/{base64UrlPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.base64UrlPath],
  headerParameters: [Parameters.accept],
  serializer
};
const arrayCsvInPathOperationSpec: coreHttp.OperationSpec = {
  path:
    "/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.arrayPath],
  headerParameters: [Parameters.accept],
  serializer
};
const unixTimeUrlOperationSpec: coreHttp.OperationSpec = {
  path: "/paths/int/1460505600/{unixTimeUrlPath}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.unixTimeUrlPath],
  headerParameters: [Parameters.accept],
  serializer
};
