import { CodeModel } from "@azure-tools/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";

export interface EndpointDetails {
  isCustom: boolean;
  endpoint?: string;
}

export async function transformBaseUrl(
  codeModel: CodeModel
): Promise<EndpointDetails> {
  let endpoint: string | undefined = "";
  let isCustom = false;

  const $host = (codeModel.globalParameters || []).find(p => {
    const { serializedName } = getLanguageMetadata(p.language);
    serializedName === "$host";
  });

  if (!$host) {
    // No support yet for multi-baseUrl yet Issue #553
    const { request } = codeModel.operationGroups[0].operations[0];
    isCustom = true;
    endpoint = request.protocol.http!.uri;
  } else {
    endpoint = $host.clientDefaultValue;
  }

  return {
    endpoint: endpoint,
    isCustom
  };
}
