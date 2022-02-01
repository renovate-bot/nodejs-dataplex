// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent, zoneId, zone) {
  // [START dataplex_v1_generated_DataplexService_CreateZone_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the parent lake:
   *  `projects/{project_number}/locations/{location_id}/lakes/{lake_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. Zone identifier.
   *  This ID will be used to generate names such as database and dataset names
   *  when publishing metadata to Hive Metastore and BigQuery.
   *  * Must contain only lowercase letters, numbers and hyphens.
   *  * Must start with a letter.
   *  * Must end with a number or a letter.
   *  * Must be between 1-63 characters.
   *  * Must be unique across all lakes from all locations in a project.
   *  * Must not be one of the reserved IDs (i.e. "default", "global-temp")
   */
  // const zoneId = 'abc123'
  /**
   *  Required. Zone resource.
   */
  // const zone = {}
  /**
   *  Optional. Only validate the request, but do not perform mutations.
   *  The default is false.
   */
  // const validateOnly = true

  // Imports the Dataplex library
  const {DataplexServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new DataplexServiceClient();

  async function callCreateZone() {
    // Construct request
    const request = {
      parent,
      zoneId,
      zone,
    };

    // Run request
    const [operation] = await dataplexClient.createZone(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateZone();
  // [END dataplex_v1_generated_DataplexService_CreateZone_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
