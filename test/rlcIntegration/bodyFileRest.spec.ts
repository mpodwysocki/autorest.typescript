import { assert } from "chai";
import BodyFile, { BodyFileClient } from "./generated/bodyFileRest/src";
import { countBytesFromStream, readFirstChunk } from "../utils/stream-helpers";
import {
  HttpBrowserStreamResponse,
  HttpNodeStreamResponse
} from "@azure-rest/core-client";
import { isNode } from "@azure/core-util";

describe("BodyFile Client", () => {
  let client: BodyFileClient;

  beforeEach("create client", () => {
    client = BodyFile({ allowInsecureConnection: true });
  });

  it("should getFile", async () => {
    const result = await client.path("/files/stream/nonempty").get();

    if (result.status !== "200") {
      const error = `Unexpected response: ${result.status}`;
      assert.fail(error);
      throw error;
    }

    assert.lengthOf(result.body, 8281);
  });
  it("should getFile", async () => {
    const result = await client.path("/files/stream/empty").get();

    if (result.status !== "200") {
      const error = `Unexpected response: ${result.status}`;
      assert.fail(error);
      throw error;
    }

    assert.isUndefined(result.body);
  });

  it("should get a large file as stream", async () => {
    let result: HttpNodeStreamResponse | HttpBrowserStreamResponse;

    if (isNode) {
      result = await client
        .path("/files/stream/verylarge")
        .get()
        .asNodeStream();
    } else {
      result = await client
        .path("/files/stream/verylarge")
        .get()
        .asBrowserStream();
    }

    if (result.status !== "200") {
      const error = `Unexpected response: ${result.status}`;
      assert.fail(error);
      throw error;
    }

    const byteCount = await countBytesFromStream(result.body!);
    assert.equal(byteCount, 3145728000);
  }).timeout(30000);
});
