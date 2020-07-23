
DROP TABLE IF EXISTS dbo.contact

CREATE TABLE [dbo].[Contact](
	[Id] int IDENTITY(1,1) PRIMARY KEY,
	[name] [nvarchar](256) NULL,
	[email] [nvarchar](max) NULL,
	[phone] [nvarchar](max) NULL,
	[message] [nvarchar](max) NULL,
	[created_at] datetime null
	)

GO


