namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: DefaultOpenIdUserChangeValidatorSchema

	/// <exclude/>
	public class DefaultOpenIdUserChangeValidatorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DefaultOpenIdUserChangeValidatorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DefaultOpenIdUserChangeValidatorSchema(DefaultOpenIdUserChangeValidatorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8ec53e46-ef7a-45a0-abd4-217bf5a8fdf0");
			Name = "DefaultOpenIdUserChangeValidator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("cafc62fc-f7d7-4a5d-acf5-62f836ef940a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,205,106,227,48,16,62,167,208,119,152,122,47,54,4,63,64,187,93,72,156,166,248,144,182,144,116,47,165,44,19,107,108,11,108,41,232,167,96,66,222,189,178,228,205,198,75,67,115,212,104,190,159,153,79,2,129,45,233,29,22,4,27,82,10,181,44,77,154,73,81,242,202,42,52,92,138,244,121,71,34,103,51,107,234,235,171,253,245,213,196,106,46,42,88,119,218,80,123,119,60,159,162,21,157,171,167,15,194,112,195,73,159,109,88,98,97,164,10,29,174,231,135,162,202,153,128,172,65,173,111,97,65,37,218,198,4,75,175,154,84,86,163,168,232,55,54,156,161,195,121,204,219,208,53,231,130,57,133,216,116,59,146,101,156,159,69,37,201,187,131,237,236,182,225,5,20,189,210,183,66,112,11,231,249,28,217,222,59,57,218,95,145,169,37,115,3,188,120,145,112,57,8,110,165,108,32,67,17,72,122,186,216,115,74,33,168,232,19,0,59,58,78,193,47,177,3,221,233,25,107,185,120,21,220,172,36,227,37,39,150,64,31,209,100,242,104,57,243,184,156,193,253,151,157,233,35,153,141,219,12,203,100,99,91,225,204,91,250,217,195,126,197,81,206,162,228,206,243,124,160,2,93,212,212,162,163,25,251,8,89,118,107,127,187,66,129,21,169,158,52,23,218,160,40,104,222,61,185,183,21,71,235,19,241,17,237,73,189,247,232,121,210,76,17,26,10,212,241,88,112,192,106,163,92,170,111,239,240,167,240,206,245,70,46,201,20,181,227,216,67,228,67,89,172,237,54,154,66,52,115,184,15,138,224,16,144,188,132,248,230,84,54,245,192,165,146,237,98,30,143,46,194,84,233,139,226,45,170,46,172,40,237,231,153,14,91,157,254,47,159,252,93,253,68,145,177,74,128,81,150,130,238,225,168,30,188,167,185,126,178,77,243,172,30,218,157,155,114,36,252,85,42,1,229,114,249,55,92,114,153,220,165,185,247,111,208,241,15,251,74,224,126,252,102,46,193,124,231,103,40,151,216,232,80,63,12,95,132,4,11,191,196,159,67,117,92,60,192,39,133,58,69,232,167,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8ec53e46-ef7a-45a0-abd4-217bf5a8fdf0"));
		}

		#endregion

	}

	#endregion

}

