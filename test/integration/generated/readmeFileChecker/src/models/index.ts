import * as coreClient from "@azure/core-client";

/** The secret set parameters. */
export interface SecretSetParameters {
  /** The value of the secret. */
  value: string;
  /** Application specific metadata in the form of key-value pairs. */
  tags?: { [propertyName: string]: string };
  /** Type of the secret value such as a password. */
  contentType?: string;
  /** The secret management attributes. */
  secretAttributes?: SecretAttributes;
}

/** The object attributes managed by the KeyVault service. */
export interface Attributes {
  /** Determines whether the object is enabled. */
  enabled?: boolean;
  /** Not before date in UTC. */
  notBefore?: Date;
  /** Expiry date in UTC. */
  expires?: Date;
  /**
   * Creation time in UTC.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly created?: Date;
  /**
   * Last updated time in UTC.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly updated?: Date;
}

/** A secret consisting of a value, id and its attributes. */
export interface SecretBundle {
  /** The secret value. */
  value?: string;
  /** The secret id. */
  id?: string;
  /** The content type of the secret. */
  contentType?: string;
  /** The secret management attributes. */
  attributes?: SecretAttributes;
  /** Application specific metadata in the form of key-value pairs. */
  tags?: { [propertyName: string]: string };
  /**
   * If this is a secret backing a KV certificate, then this field specifies the corresponding key backing the KV certificate.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly kid?: string;
  /**
   * True if the secret's lifetime is managed by key vault. If this is a secret backing a certificate, then managed will be true.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly managed?: boolean;
}

/** The key vault error exception. */
export interface KeyVaultError {
  /**
   * The key vault server error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: ErrorModel;
}

/** The key vault server error. */
export interface ErrorModel {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The key vault server error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: ErrorModel;
}

/** The secret update parameters. */
export interface SecretUpdateParameters {
  /** Type of the secret value such as a password. */
  contentType?: string;
  /** The secret management attributes. */
  secretAttributes?: SecretAttributes;
  /** Application specific metadata in the form of key-value pairs. */
  tags?: { [propertyName: string]: string };
}

/** The secret list result. */
export interface SecretListResult {
  /**
   * A response message containing a list of secrets in the key vault along with a link to the next page of secrets.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: SecretItem[];
  /**
   * The URL to get the next set of secrets.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The secret item containing secret metadata. */
export interface SecretItem {
  /** Secret identifier. */
  id?: string;
  /** The secret management attributes. */
  attributes?: SecretAttributes;
  /** Application specific metadata in the form of key-value pairs. */
  tags?: { [propertyName: string]: string };
  /** Type of the secret value such as a password. */
  contentType?: string;
  /**
   * True if the secret's lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly managed?: boolean;
}

/** The deleted secret list result */
export interface DeletedSecretListResult {
  /**
   * A response message containing a list of the deleted secrets in the vault along with a link to the next page of deleted secrets
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: DeletedSecretItem[];
  /**
   * The URL to get the next set of deleted secrets.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The backup secret result, containing the backup blob. */
export interface BackupSecretResult {
  /**
   * The backup blob containing the backed up secret.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Uint8Array;
}

/** The secret restore parameters. */
export interface SecretRestoreParameters {
  /** The backup blob associated with a secret bundle. */
  secretBundleBackup: Uint8Array;
}

/** Properties of the key backing a certificate. */
export interface SecretProperties {
  /** The media type (MIME type). */
  contentType?: string;
}

/** The secret management attributes. */
export interface SecretAttributes extends Attributes {
  /**
   * softDelete data retention days. Value should be >=7 and <=90 when softDelete enabled, otherwise 0.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly recoverableDays?: number;
  /**
   * Reflects the deletion recovery level currently in effect for secrets in the current vault. If it contains 'Purgeable', the secret can be permanently deleted by a privileged user; otherwise, only the system can purge the secret, at the end of the retention interval.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly recoveryLevel?: DeletionRecoveryLevel;
}

/** A Deleted Secret consisting of its previous id, attributes and its tags, as well as information on when it will be purged. */
export interface DeletedSecretBundle extends SecretBundle {
  /** The url of the recovery object, used to identify and recover the deleted secret. */
  recoveryId?: string;
  /**
   * The time when the secret is scheduled to be purged, in UTC
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly scheduledPurgeDate?: Date;
  /**
   * The time when the secret was deleted, in UTC
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deletedDate?: Date;
}

/** The deleted secret item containing metadata about the deleted secret. */
export interface DeletedSecretItem extends SecretItem {
  /** The url of the recovery object, used to identify and recover the deleted secret. */
  recoveryId?: string;
  /**
   * The time when the secret is scheduled to be purged, in UTC
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly scheduledPurgeDate?: Date;
  /**
   * The time when the secret was deleted, in UTC
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deletedDate?: Date;
}

/** Known values of {@link ApiVersion72Preview} that the service accepts. */
export enum KnownApiVersion72Preview {
  /** Api Version '7.2-preview' */
  Seven2Preview = "7.2-preview"
}

/**
 * Defines values for ApiVersion72Preview. \
 * {@link KnownApiVersion72Preview} can be used interchangeably with ApiVersion72Preview,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **7.2-preview**: Api Version '7.2-preview'
 */
export type ApiVersion72Preview = string;

/** Known values of {@link DeletionRecoveryLevel} that the service accepts. */
export enum KnownDeletionRecoveryLevel {
  /** Denotes a vault state in which deletion is an irreversible operation, without the possibility for recovery. This level corresponds to no protection being available against a Delete operation; the data is irretrievably lost upon accepting a Delete operation at the entity level or higher (vault, resource group, subscription etc.) */
  Purgeable = "Purgeable",
  /** Denotes a vault state in which deletion is recoverable, and which also permits immediate and permanent deletion (i.e. purge). This level guarantees the recoverability of the deleted entity during the retention interval (90 days), unless a Purge operation is requested, or the subscription is cancelled. System wil permanently delete it after 90 days, if not recovered */
  RecoverablePurgeable = "Recoverable+Purgeable",
  /** Denotes a vault state in which deletion is recoverable without the possibility for immediate and permanent deletion (i.e. purge). This level guarantees the recoverability of the deleted entity during the retention interval(90 days) and while the subscription is still available. System wil permanently delete it after 90 days, if not recovered */
  Recoverable = "Recoverable",
  /** Denotes a vault and subscription state in which deletion is recoverable within retention interval (90 days), immediate and permanent deletion (i.e. purge) is not permitted, and in which the subscription itself  cannot be permanently canceled. System wil permanently delete it after 90 days, if not recovered */
  RecoverableProtectedSubscription = "Recoverable+ProtectedSubscription",
  /** Denotes a vault state in which deletion is recoverable, and which also permits immediate and permanent deletion (i.e. purge when 7<= SoftDeleteRetentionInDays < 90). This level guarantees the recoverability of the deleted entity during the retention interval, unless a Purge operation is requested, or the subscription is cancelled. */
  CustomizedRecoverablePurgeable = "CustomizedRecoverable+Purgeable",
  /** Denotes a vault state in which deletion is recoverable without the possibility for immediate and permanent deletion (i.e. purge when 7<= SoftDeleteRetentionInDays < 90).This level guarantees the recoverability of the deleted entity during the retention interval and while the subscription is still available. */
  CustomizedRecoverable = "CustomizedRecoverable",
  /** Denotes a vault and subscription state in which deletion is recoverable, immediate and permanent deletion (i.e. purge) is not permitted, and in which the subscription itself cannot be permanently canceled when 7<= SoftDeleteRetentionInDays < 90. This level guarantees the recoverability of the deleted entity during the retention interval, and also reflects the fact that the subscription itself cannot be cancelled. */
  CustomizedRecoverableProtectedSubscription = "CustomizedRecoverable+ProtectedSubscription"
}

/**
 * Defines values for DeletionRecoveryLevel. \
 * {@link KnownDeletionRecoveryLevel} can be used interchangeably with DeletionRecoveryLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Purgeable**: Denotes a vault state in which deletion is an irreversible operation, without the possibility for recovery. This level corresponds to no protection being available against a Delete operation; the data is irretrievably lost upon accepting a Delete operation at the entity level or higher (vault, resource group, subscription etc.) \
 * **Recoverable+Purgeable**: Denotes a vault state in which deletion is recoverable, and which also permits immediate and permanent deletion (i.e. purge). This level guarantees the recoverability of the deleted entity during the retention interval (90 days), unless a Purge operation is requested, or the subscription is cancelled. System wil permanently delete it after 90 days, if not recovered \
 * **Recoverable**: Denotes a vault state in which deletion is recoverable without the possibility for immediate and permanent deletion (i.e. purge). This level guarantees the recoverability of the deleted entity during the retention interval(90 days) and while the subscription is still available. System wil permanently delete it after 90 days, if not recovered \
 * **Recoverable+ProtectedSubscription**: Denotes a vault and subscription state in which deletion is recoverable within retention interval (90 days), immediate and permanent deletion (i.e. purge) is not permitted, and in which the subscription itself  cannot be permanently canceled. System wil permanently delete it after 90 days, if not recovered \
 * **CustomizedRecoverable+Purgeable**: Denotes a vault state in which deletion is recoverable, and which also permits immediate and permanent deletion (i.e. purge when 7<= SoftDeleteRetentionInDays < 90). This level guarantees the recoverability of the deleted entity during the retention interval, unless a Purge operation is requested, or the subscription is cancelled. \
 * **CustomizedRecoverable**: Denotes a vault state in which deletion is recoverable without the possibility for immediate and permanent deletion (i.e. purge when 7<= SoftDeleteRetentionInDays < 90).This level guarantees the recoverability of the deleted entity during the retention interval and while the subscription is still available. \
 * **CustomizedRecoverable+ProtectedSubscription**: Denotes a vault and subscription state in which deletion is recoverable, immediate and permanent deletion (i.e. purge) is not permitted, and in which the subscription itself cannot be permanently canceled when 7<= SoftDeleteRetentionInDays < 90. This level guarantees the recoverability of the deleted entity during the retention interval, and also reflects the fact that the subscription itself cannot be cancelled.
 */
export type DeletionRecoveryLevel = string;

/** Optional parameters. */
export interface SetSecretOptionalParams extends coreClient.OperationOptions {
  /** Application specific metadata in the form of key-value pairs. */
  tags?: { [propertyName: string]: string };
  /** Type of the secret value such as a password. */
  contentType?: string;
  /** The secret management attributes. */
  secretAttributes?: SecretAttributes;
}

/** Contains response data for the setSecret operation. */
export type SetSecretResponse = SecretBundle;

/** Optional parameters. */
export interface DeleteSecretOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteSecret operation. */
export type DeleteSecretResponse = DeletedSecretBundle;

/** Optional parameters. */
export interface UpdateSecretOptionalParams
  extends coreClient.OperationOptions {
  /** Type of the secret value such as a password. */
  contentType?: string;
  /** The secret management attributes. */
  secretAttributes?: SecretAttributes;
  /** Application specific metadata in the form of key-value pairs. */
  tags?: { [propertyName: string]: string };
}

/** Contains response data for the updateSecret operation. */
export type UpdateSecretResponse = SecretBundle;

/** Optional parameters. */
export interface GetSecretOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getSecret operation. */
export type GetSecretResponse = SecretBundle;

/** Optional parameters. */
export interface GetSecretsOptionalParams extends coreClient.OperationOptions {
  /** Maximum number of results to return in a page. If not specified, the service will return up to 25 results. */
  maxresults?: number;
}

/** Contains response data for the getSecrets operation. */
export type GetSecretsResponse = SecretListResult;

/** Optional parameters. */
export interface GetSecretVersionsOptionalParams
  extends coreClient.OperationOptions {
  /** Maximum number of results to return in a page. If not specified, the service will return up to 25 results. */
  maxresults?: number;
}

/** Contains response data for the getSecretVersions operation. */
export type GetSecretVersionsResponse = SecretListResult;

/** Optional parameters. */
export interface GetDeletedSecretsOptionalParams
  extends coreClient.OperationOptions {
  /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
  maxresults?: number;
}

/** Contains response data for the getDeletedSecrets operation. */
export type GetDeletedSecretsResponse = DeletedSecretListResult;

/** Optional parameters. */
export interface GetDeletedSecretOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDeletedSecret operation. */
export type GetDeletedSecretResponse = DeletedSecretBundle;

/** Optional parameters. */
export interface PurgeDeletedSecretOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface RecoverDeletedSecretOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the recoverDeletedSecret operation. */
export type RecoverDeletedSecretResponse = SecretBundle;

/** Optional parameters. */
export interface BackupSecretOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the backupSecret operation. */
export type BackupSecretResponse = BackupSecretResult;

/** Optional parameters. */
export interface RestoreSecretOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the restoreSecret operation. */
export type RestoreSecretResponse = SecretBundle;

/** Optional parameters. */
export interface GetSecretsNextOptionalParams
  extends coreClient.OperationOptions {
  /** Maximum number of results to return in a page. If not specified, the service will return up to 25 results. */
  maxresults?: number;
}

/** Contains response data for the getSecretsNext operation. */
export type GetSecretsNextResponse = SecretListResult;

/** Optional parameters. */
export interface GetSecretVersionsNextOptionalParams
  extends coreClient.OperationOptions {
  /** Maximum number of results to return in a page. If not specified, the service will return up to 25 results. */
  maxresults?: number;
}

/** Contains response data for the getSecretVersionsNext operation. */
export type GetSecretVersionsNextResponse = SecretListResult;

/** Optional parameters. */
export interface GetDeletedSecretsNextOptionalParams
  extends coreClient.OperationOptions {
  /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
  maxresults?: number;
}

/** Contains response data for the getDeletedSecretsNext operation. */
export type GetDeletedSecretsNextResponse = DeletedSecretListResult;

/** Optional parameters. */
export interface KeyVaultClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
