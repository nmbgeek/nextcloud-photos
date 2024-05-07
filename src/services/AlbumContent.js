/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import axios from '@nextcloud/axios'
import { generateUrl } from '@nextcloud/router'
import { genFileInfo, encodeFilePath } from '../utils/fileUtils.js'
import allowedMimes from './AllowedMimes.js'
import { getCurrentUser } from '@nextcloud/auth'

/**
 * List files from a folder and filter out unwanted mimes
 *
 * @param {string} path the path relative to the user root
 * @param {object} [options] optional options for axios
 * @param {boolean} [options.shared] fetch shared albums ?
 * @return {Promise<object[]>} the file list
 */
export default async function(path = '/', options = {}) {
	const endpoint = generateUrl(`/apps/photos/api/v1/${options.shared ? 'shared' : 'albums'}`)
	const prefix = `/files/${getCurrentUser()?.uid}`

	// fetch listing
	const response = await axios.get(endpoint + encodeFilePath(path), options)
	const list = response.data
		.map(data => ({ ...data, filename: `${prefix}${data.filename}` }))
		.map(data => genFileInfo(data))

	// filter all the files and folders
	let folder = {}
	const folders = []
	const files = []

	for (const entry of list) {
		// is this the current provided path ?
		if (entry.filename === `${prefix}${path}`) {
			folder = entry
		} else if (entry.type !== 'file') {
			folders.push(entry)
		} else if (allowedMimes.indexOf(entry.mime) > -1) {
			files.push(entry)
		}
	}

	// return current folder, subfolders and files
	return { folder, folders, files }
}
