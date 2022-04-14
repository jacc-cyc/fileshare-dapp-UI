import React, {useState, useEffect} from 'react';

//redux
import { useSelector } from 'react-redux';

//Web3, smart contracts
//import Web3 from 'web3';
//import FileShare from '../../abis/FileShare.json'
//import NFT from '../../abis/NFT.json'

//Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  itemID: {
    fontWeight: "normal",
  },
}));


const fileItems2 = [
  { id: 1, nftId: 1, name: 'Sample 01', fileURI: "https://ipfs.infura.io/ipfs/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 
  fileURI2: "/images/dog.png", ownerAddress: '0x9F04164571FF66d4196bA791eD371fb9a8ba94Cb', 
  shortDescription: 'My dog photo', longDescription: 'bla bla bla', fileType: "png" },

  { id: 2, nftId: 2, name: 'Sample 02', fileURI: "https://ipfs.infura.io/ipfs/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 
  fileURI2: "/images/wallpaper.jpg", ownerAddress: '0x9F04164571FF66d4196bA791eD371fb9a8ba94Cb', 
  shortDescription: 'a cool wallpaper', longDescription: 'bla bla bla', fileType: "jpg" },

  { id: 3, nftId: 3, name: 'Sample 03', fileURI: "https://ipfs.infura.io/ipfs/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 
  ownerAddress: '0x9F04164571FF66d4196bA791eD371fb9a8ba94Cb', 
  shortDescription: 'document testing', longDescription: 'bla bla bla', fileType: "docx" },

  { id: 4, nftId: 4, name: 'Sample 04', fileURI: "https://ipfs.infura.io/ipfs/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 
  ownerAddress: '0x9F04164571FF66d4196bA791eD371fb9a8ba94Cb', 
  shortDescription: 'powerpoint testing', longDescription: 'bla bla bla', fileType: "pptx" },

  { id: 5, nftId: 5, name: 'Sample 05', fileURI: "https://ipfs.infura.io/ipfs/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 
  ownerAddress: '0x9F04164571FF66d4196bA791eD371fb9a8ba94Cb', 
  shortDescription: 'pdf testing', longDescription: 'bla bla bla', fileType: "pdf" },

  { id: 6, nftId: 6, name: 'Sample 06', fileURI: "https://ipfs.infura.io/ipfs/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 
  ownerAddress: '0x9F04164571FF66d4196bA791eD371fb9a8ba94Cb', 
  shortDescription: 'pdf testing', longDescription: 'bla bla bla', fileType: "pdf" },
]


export default function Album() {
  const classes = useStyles()
  
  //redux states
  const walletAddress = useSelector(state => state.walletAddress);
  const walletIsConnected = useSelector(state => state.walletIsConnected);

  //web3 instance
  //const web3 = new Web3(window.ethereum)

  //initialze FileShare contract instance
  //const fileShare = new web3.eth.Contract(FileShare.abi, FileShare.networks[netId].address)

  //File data items
  const [fileItems, setFileItems] = useState([])

  //"File Details" Display Box states
  const [ownerAddress, setOwnerAddress] = useState('undefined')
  const [longDescription, setLongDescription] = useState('undefined')
  const [fileName, setFileName] = useState('undefined')
  const [fileURI, setFileURI] = useState('undefined')
  const [fileType, setFileType] = useState('undefined')
  const [fileId, setFileId] = useState('0')
  const [nftId, setNftId] = useState('0')

  //"Share File" user input values states
  const [fileURIInput, setFileURIInput] = useState('')
  const [fileNameInput, setFileNameInput] = useState('')
  const [fileTypeInput, setFileTypeInput] = useState('')
  const [shortDescriptionInput, setShortDescriptionInput] = useState('')
  const [longDescriptionInput, setLongDescriptionInput] = useState('')
  const fileTypes = ['png', 'jpg', 'docx', 'pdf', 'pptx', 'others']

  //Dialog states
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [open6, setOpen6] = useState(false)
  const [open7, setOpen7] = useState(false)

  //Dialog actions
  const openDialog = () =>{
    setOpen3(true);
    /* if(walletIsConnected){
      setOpen3(true);
    }else{
      setOpen2(true);
    } */
  }

  const closeDialog = () =>{
    setOpen(false)
  }

  const closeDialog2 = () =>{
    setOpen2(false)
  }

  const closeDialog3 = () =>{
    setOpen3(false)
    console.log("fileURIInput: ", fileURIInput)
    console.log("fileNameInput: ", fileNameInput)
    console.log("fileTypeInput: ", fileTypeInput)
    console.log("shortDescriptionInput: ", shortDescriptionInput)
    console.log("longDescriptionInput: ", longDescriptionInput)
  }

  const closeDialog4 = () =>{
    setOpen4(false)
  }

  const closeDialog5 = () =>{
    setOpen5(false)
  }

  const closeDialog6 = () =>{
    setOpen6(false)
  }

  const closeDialog7 = () =>{
    setOpen7(false)
    //refresh the page, to reload the data from blockchain
    window.location.reload();
  }

  //"Share to Public" button, adding new file item to the blockchain
  /* const addItem = async () =>{
    closeDialog3()
    
    //get the blockchain network id and contract instances
    const netId = await web3.eth.net.getId()
    console.log('net id: ', netId)
    const fileShare = new web3.eth.Contract(FileShare.abi, FileShare.networks[netId].address)
    const nft = new web3.eth.Contract(NFT.abi, NFT.networks[netId].address)
  
    setOpen4(true)
    console.log('adding item to blockchain...')
    //mint the shared file as a NFT
    await fileShare.methods.addItem(walletAddress, fileURIInput, fileNameInput, fileTypeInput, shortDescriptionInput, longDescriptionInput).send({
      from: walletAddress
    })

    console.log('giving NFT transferral approval to FileShare...')
    //approve FileShare to transfer the file NFT by its id
    const id = await fileShare.methods.getNFTId().call()
    await nft.methods.setPlatformApproval(FileShare.networks[netId].address, id).send({
      from: walletAddress
    })

    closeDialog4()

    //refresh the page, to reload the data from blockchain
    window.location.reload();
  } */

  //transfer the file NFT to new owner from sharer
  /* const transferFile = async () =>{
    console.log(walletAddress)
    console.log(ownerAddress)

    if(walletAddress === ownerAddress){
      closeDialog5()
      setOpen6(true)
    }else{
      closeDialog5()
      //get the blockchain network id and contract instances
      const netId = await web3.eth.net.getId()
      console.log('net id: ', netId)
      const fileShare = new web3.eth.Contract(FileShare.abi, FileShare.networks[netId].address)

      setOpen4(true)
      console.log('transferring NFT to new owner...')
      //mint the shared file as a NFT
      await fileShare.methods.transferNFT(ownerAddress, walletAddress, fileId, nftId).send({
        from: walletAddress
      })

      closeDialog4()
      setOpen7(true)
      //refresh the page, to reload the data from blockchain
      //window.location.reload();
    }
  } */

  //"view" button, display file details information
  const viewDetails = (id) => {
    //console.log('view detail button')
    for(let i=0;i<fileItems.length;i++){
      if(fileItems[i].id === id){
        //console.log(id, fileItems[i].longDescription, fileItems[i].ownerAddress)
        setOwnerAddress(fileItems[i].ownerAddress)
        setLongDescription(fileItems[i].longDescription)
        setFileName(fileItems[i].name)
        setFileURI(fileItems[i].fileURI)
        setFileId(fileItems[i].id)
        setFileType(fileItems[i].fileType)
        setNftId(fileItems[i].nftId)
        break
      }
    }
    setOpen(true)
  }

  //"get" button, retrieve file data item info
  const getButton = (id) => {
    //console.log('get button')
    for(let i=0;i<fileItems.length;i++){
      if(fileItems[i].id === id){
        //console.log(id, fileItems[i].longDescription, fileItems[i].ownerAddress)
        setOwnerAddress(fileItems[i].ownerAddress)
        setFileName(fileItems[i].name)
        setFileURI(fileItems[i].fileURI)
        setFileId(fileItems[i].id)
        setFileType(fileItems[i].fileType)
        setNftId(fileItems[i].nftId)
        break
      }
    }
    setOpen5(true)
    //if(walletIsConnected) setOpen5(true)
    //else setOpen2(true)
  }

  const imageToShow = (id) => {
    for(let i=0;i<fileItems.length;i++){
      if(fileItems[i].id === id){
        if(fileItems[i].fileType === 'png' || fileItems[i].fileType === 'jpg'){
          return fileItems[i].fileURI2
          //return fileItems[i].fileURI
        }else if(fileItems[i].fileType === 'pdf'){
          return "/images/pdf2.png"
        }else if(fileItems[i].fileType === 'pptx'){
          return "/images/ppt.png"
        }else{
          return "/images/document.jpg"
        }
      }
    }
    return "/images/document.jpg"
  }

  useEffect(() => {
    console.log('useEffect...')
    //console.log(fileItems2)

    //fetch data items from the blockchain
    /* const fetchData = async () =>{
      //get the blockchain network id and FileShare contract instance
      const netId = await web3.eth.net.getId()
      console.log('net id: ', netId)
      const fileShare = new web3.eth.Contract(FileShare.abi, FileShare.networks[netId].address)

      //get the file items
      const items = await fileShare.methods.getItems().call()
      console.log("before: ", items);
      //console.log(items[1].fileURI)

      //remove the redundant data item
      //console.log(items.length)
      let len = items.length
      while(len--){
        if(items[len].ownerAddress === '' || items[len].id === 0){
          items.splice(len,1)
        }
      }

      console.log("after: ", items);
      setFileItems(items)
    }

    fetchData() */

    setFileItems(fileItems2)
  }, [])

  return (
    <>
      <CssBaseline />
        {/* Top Section */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">

            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Explore Shared Files
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here you can find variety of files shared from other users. Get what you want and 
              become the unique owner of the file with a <i>FileShareNFT</i>.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              To share your file. Just press the below button!
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={openDialog}>
                    Share to Public
                  </Button>
                </Grid>
              </Grid>
            </div>

          </Container>
        </div>
        
        <Container className={classes.cardGrid} maxWidth="md">

          {/* File Data Item Section */}

          <Grid container spacing={4}>
            {fileItems.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>

                  {/* image */}
                  <CardMedia
                    className={classes.cardMedia}
                    image={imageToShow(item.id)}
                    title="Image title"
                  />

                  {/* Description */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography>
                      {item.shortDescription === '' ? 'No Description' : item.shortDescription}
                    </Typography>
                  </CardContent>

                  {/* Button */}
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => viewDetails(item.id)}>
                      View
                    </Button>
                    <Button size="small" color="primary" onClick={() => getButton(item.id)}>
                      Get
                    </Button>
                  </CardActions>
                  
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>

        {/* "File Deatils" Information Box*/}
        
        <Dialog
            open={open}
            onClose={closeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title"><i>{"FileShareNFT#" + nftId}</i> &nbsp; {"'" + fileName + "'"}</DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{ fontWeight: "bold" }}>
              Item ID: <span className={classes.itemID}>{fileId}</span>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description" style={{ fontWeight: "bold" }}>
              {'File URI: '}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description" style={{ wordWrap: "break-word", fontWeight: "", color: "#43688B" }}>
              {fileURI}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description" style={{ fontWeight: "bold" }}>
              {'Owner address: '}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description" style={{ fontWeight: "", color: "#43688B" }}>
              {ownerAddress}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description" style={{ fontWeight: "bold" }}>
              {'Description: '}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description" style={{ wordWrap: "break-word", fontWeight: "", color: "#43688B" }}>
              {longDescription === '' ? 'The sharer did not say anything about this file.' : longDescription}
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={closeDialog} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>

        </Dialog>

        {/* "Wallet is not connected" Information Box*/}
        
        <Dialog
            open={open2}
            onClose={closeDialog2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >

          <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{ fontWeight: "", color: "#BF9D1F", fontSize: "18px" }}>
              {"Please connect your MetaMask Wallet to our platform before using our file-sharing features. Thanks."}
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={closeDialog2} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>

        </Dialog>

        {/* "MetaMask Transaction" Information Box*/}
        
        <Dialog
            open={open4}
            onClose={closeDialog4}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >

          <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{ fontSize: "18px" }}>
              {"Waiting for MetaMask Transactions..."}
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={closeDialog4} color="primary" autoFocus>
              
            </Button>
          </DialogActions>

        </Dialog>

        {/* "Share File" Input Box */}
        
        <Dialog open={open3} onClose={closeDialog3} aria-labelledby="form-dialog-title">

        <DialogTitle id="form-dialog-title">Share My File</DialogTitle>

        <DialogContent>

          <DialogContentText>
            To share your file in our platform, please fill in the below information for your file. The file will become
             a <i>FileShareNFT</i> and maybe "GET" by someone later. Also, you will receive our "FILO" platform token for sharing!
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="fileURI"
            label="File URI (IPFS link)"
            type="text"
            onChange={(event) => {setFileURIInput(event.target.value)}}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="fileName"
            label="File name"
            type="text"
            onChange={(event) => {setFileNameInput(event.target.value)}}
            fullWidth
          />
          
          
          <TextField
            autoFocus
            margin="dense"
            id="shortDescription"
            label="Short description"
            type="text"
            onChange={(event) => {setShortDescriptionInput(event.target.value)}}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="longDescription"
            label="Detail description"
            type="text"
            onChange={(event) => {setLongDescriptionInput(event.target.value)}}
            fullWidth
            style={{ paddingBottom: "10px"}}
          />
          <TextField
            id="fileType"
            select
            label="File Type"
            value={fileTypeInput}
            onChange={(event) => {setFileTypeInput(event.target.value)}}
            helperText="Please select your file type"
            style={{ paddingTop: "0px" , paddingBottom: ""}}
          >
            {fileTypes.map((fileType) => (
              <MenuItem key={fileType} value={fileType}>
                {fileType}
              </MenuItem>
            ))}
          </TextField>

        </DialogContent>

        <DialogActions>
          <Button onClick={closeDialog3} color="primary">
            Later
          </Button>
          <Button onClick={closeDialog3} color="primary">
            Share
          </Button>
        </DialogActions>

      </Dialog>

      {/* "Get File" Information Box*/}
        
      <Dialog
            open={open5}
            onClose={closeDialog5}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">{"Interested in '" + fileName + "' ?"}</DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{ fontWeight: "bold", color: "#43688B" }}>
               Pressing 'Yes' means that <i>FileShare</i> will transfer this <i>FileShareNFT</i> to your wallet address. And you
                will become the unique owner of this file after that!
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={closeDialog5} color="primary" autoFocus>
              NO
            </Button>
            <Button onClick={closeDialog5} color="primary" autoFocus>
              YES
            </Button>
          </DialogActions>

        </Dialog>

        {/* "You are the owner" Information Box*/}
        
         <Dialog
            open={open6}
            onClose={closeDialog6}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{ fontWeight: "", color: "#BF9D1F", fontSize: "18px" }}>
              Oops!! You are already the original owner (sharer) of <i>FileShareNFT#{nftId}</i>.
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={closeDialog6} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>

        </Dialog>

        {/* "Congrat for getting the file NFT" Information Box*/}
        
        <Dialog
            open={open7}
            onClose={closeDialog7}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{ fontSize: "18px", fontWeight: "bold", color: "black" }}>
              Congrat! You are now the unique owner of <i>FileShareNFT#{nftId}</i>.
            </DialogContentText>

            <DialogContentText id="alert-dialog-description" style={{ wordWrap: "break-word", color: "#43688B", fontSize: "18px" }}>
              {fileURI}
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={closeDialog7} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>

        </Dialog>



    </>
  );
}