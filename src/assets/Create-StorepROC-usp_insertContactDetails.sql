  
IF EXISTS(SELECT 1 FROM sys.objects WHERE type = 'P' AND name = 'usp_insertContactDetails')
Begin
DROP PROCEDURE usp_insertContactDetails
End
Go

Create PROCEDURE usp_insertContactDetails  
  @name  varchar(max)  
 ,@email  varchar(max)
 ,@phone  varchar(max)
 ,@message  varchar(max)
 ,@created_at  datetime
AS  
BEGIN  

INSERT INTO contact values (@name,@email,@phone,@message,@created_at)
  
End

  
