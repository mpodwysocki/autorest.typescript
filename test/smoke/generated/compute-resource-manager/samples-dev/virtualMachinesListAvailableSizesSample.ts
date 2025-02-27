/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all available virtual machine sizes to which the specified virtual machine can be resized.
 *
 * @summary Lists all available virtual machine sizes to which the specified virtual machine can be resized.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/ListAvailableVmSizes_VirtualMachines.json
 */
async function listsAllAvailableVirtualMachineSizesToWhichTheSpecifiedVirtualMachineCanBeResized() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmName = "myVmName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualMachines.listAvailableSizes(
    resourceGroupName,
    vmName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listsAllAvailableVirtualMachineSizesToWhichTheSpecifiedVirtualMachineCanBeResized().catch(
  console.error
);
