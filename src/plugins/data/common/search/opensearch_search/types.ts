/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { SearchResponse } from 'elasticsearch';
import { Search } from '@opensearch-project/opensearch/api/requestParams';
import { IOpenSearchDashboardsSearchRequest, IOpenSearchDashboardsSearchResponse } from '../types';

export const OPENSEARCH_SEARCH_STRATEGY = 'opensearch';

export interface ISearchOptions {
  /**
   * An `AbortSignal` that allows the caller of `search` to abort a search request.
   */
  abortSignal?: AbortSignal;
  /**
   * Use this option to force using a specific server side search strategy. Leave empty to use the default strategy.
   */
  strategy?: string;
}

export type ISearchRequestParams<T = Record<string, any>> = {
  trackTotalHits?: boolean;
} & Search<T>;

export interface IOpenSearchSearchRequest
  extends IOpenSearchDashboardsSearchRequest<ISearchRequestParams> {
  indexType?: string;
}

export type IOpenSearchSearchResponse<Source = any> = IOpenSearchDashboardsSearchResponse<
  SearchResponse<Source>
>;
