'use strict';
Object.defineProperty(exports, "__esModule", { value: true });

class SqfVariable {
	constructor(name, dict) {
		this.name = name;
		this.isGlobal = true;
		this.value = null;
		if (name.indexOf('_') == 0) { this.isGlobal = false; }
		this.fileOccurrences = {};
	}

	addFileOccurrence(dict) {
		if(!!dict) {
			if (!(dict.file in this.fileOccurrences)) { this.fileOccurrences[dict.file] = { lines: {} }; }
			if (!(dict.line in this.fileOccurrences[dict.file]['lines'])) {
				this.fileOccurrences[dict.file]['lines'][dict.line] = [];
			}
			
			this.fileOccurrences[dict.file]['lines'][dict.line].push({
				column_start: dict.column_start,
				column_end: dict.column_end
			});
		}
	}
};

exports.SqfVariable = SqfVariable;