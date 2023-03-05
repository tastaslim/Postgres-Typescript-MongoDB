export const hasSql = (value: string) => {
	if (value === null || value === undefined) return false;

	const sql_meta = /(%27)|(')|(--)/i;
	if (sql_meta.test(value)) return true;

	// eslint-disable-next-line no-control-regex
	const sql_meta2 = /((%3D)|(=))[^\n]*((%27)|(')|(--)|(%3B)|(;))/i;
	if (sql_meta2.test(value)) return true;

	const sql_typical = /w*((%27)|('))((%6F)|o|(%4F))((%72)|r|(%52))/i;
	if (sql_typical.test(value)) return true;

	const sql_union = /((%27)|('))union/i;
	if (sql_union.test(value)) return true;

	return false;
};

export const hasScript = (value: string) => {
	return /<script[\s\S]?>[\s\S]?<\/script>/gi.test(value);
};

export const isValidEmailAddress = (emailAddress: string) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(emailAddress);
};

export const isValidGuid = (guid: string) => {
	return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{3}-[0-9a-f]{3}-[0-9a-f]{12}$/i.test(guid);
};

// 0123cv19-01d1-01f-af1-012345abcdef
