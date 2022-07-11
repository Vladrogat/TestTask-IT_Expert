namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrProcessCreateReleaseMethodsWrapper

	/// <exclude/>
	public class UsrProcessCreateReleaseMethodsWrapper : ProcessModel
	{

		public UsrProcessCreateReleaseMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			// Формирование текста сообщения.
			string messageText = Get<Guid>("ProcessSchemaParameterIdPublish").ToString();
			// Присвоение сообщению имени.
			string sender = "NewRelease";
			// Публикация сообщения по WebSocket.
			Terrasoft.Configuration.MsgChannelUtilities.PostMessage(UserConnection, sender, messageText);
			return true;
		}

		#endregion

	}

	#endregion

}

